import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";

import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { useMemo } from "react";

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
    [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
    [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <p className="font-normal">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_node, children) => (
      <h1 className="text-4xl font-bold">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <h2 className="text-3xl font-bold">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <h3 className="text-2xl font-bold">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_node, children) => (
      <h4 className="text-xl font-bold">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_node, children) => (
      <h5 className="text-lg font-bold">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_node, children) => (
      <h6 className="text-base font-bold">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (_node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (_node, children) => <li>{children}</li>,
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.QUOTE]: (_node, children) => <blockquote>{children}</blockquote>,
  },
};

export type RichTextViewProps = {
  document: Document;
};

export function RichTextView({ document }: RichTextViewProps) {
  const content = useMemo(
    () => documentToReactComponents(document, options),
    [document]
  );

  return <article className="prose prose-invert">{content}</article>;
}
