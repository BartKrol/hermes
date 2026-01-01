"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

export type DateTimePickerProps = {
  label: string;
  date?: string;
  description?: string;
  onSubmit: (date: Date) => Promise<void>;
};

export function DateTimePicker({
  date,
  label,
  description,
  onSubmit,
}: DateTimePickerProps) {
  const t = useTranslations("DateTimePicker");

  const FormSchema = z.object({
    time: z.date({
      required_error: t("date_time_required"),
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      time: date ? new Date(date) : new Date(),
    },
  });

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    await onSubmit(data.time);
    toast.success(`Selected date and time: ${format(data.time, "PPPP HH:mm")}`);
  };

  const handleTimeChange = (type: "hour" | "minute", value: string) => {
    const currentDate = form.getValues("time") || new Date();

    if (type === "hour") {
      const hour = parseInt(value, 10);
      currentDate.setHours(hour);
    } else if (type === "minute") {
      currentDate.setMinutes(parseInt(value, 10));
    }

    form.setValue("time", currentDate);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;

    const selectedDate = new Date(e.target.value);
    const currentDate = form.getValues("time") || new Date();

    // Keep the time from the current value but update the date
    selectedDate.setHours(currentDate.getHours());
    selectedDate.setMinutes(currentDate.getMinutes());

    form.setValue("time", selectedDate);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{label}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "MM/dd/yyyy HH:mm")
                      ) : (
                        <span>{t("date_placeholder")}</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4" align="start">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">{t("date")}</h3>
                      <Input
                        type="date"
                        value={
                          field.value ? format(field.value, "yyyy-MM-dd") : ""
                        }
                        onChange={handleDateChange}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">{t("hours")}</h3>
                        <ScrollArea className="h-[200px]">
                          <div className="grid grid-cols-3 gap-1">
                            {Array.from({ length: 24 }).map((_, i) => (
                              <Button
                                key={i}
                                size="sm"
                                variant={
                                  field.value && field.value.getHours() === i
                                    ? "default"
                                    : "outline"
                                }
                                onClick={() =>
                                  handleTimeChange("hour", i.toString())
                                }
                                className="h-8"
                              >
                                {i.toString().padStart(2, "0")}
                              </Button>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">{t("minutes")}</h3>
                        <ScrollArea className="h-[200px]">
                          <div className="grid grid-cols-3 gap-1">
                            {Array.from({ length: 12 }).map((_, i) => {
                              const minute = i * 5;
                              return (
                                <Button
                                  key={minute}
                                  size="sm"
                                  variant={
                                    field.value &&
                                    field.value.getMinutes() === minute
                                      ? "default"
                                      : "outline"
                                  }
                                  onClick={() =>
                                    handleTimeChange(
                                      "minute",
                                      minute.toString()
                                    )
                                  }
                                  className="h-8"
                                >
                                  {minute.toString().padStart(2, "0")}
                                </Button>
                              );
                            })}
                          </div>
                        </ScrollArea>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              {description && <FormDescription>{description}</FormDescription>}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t("submit")}</Button>
      </form>
    </Form>
  );
}
