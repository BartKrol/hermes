"use client";
import { getActiveNodes } from "@/actions/edgesAction";
import { getSettings } from "@/actions/settingsAction";
import useTimer from "@/hooks/useTimer";

import { useEffect, useState } from "react";

type HermesProps = {
  activeNodes: Set<string>;
  endTime: string;
};

enum Nodes {
  node1 = "node_1",
  node2 = "node_2",
  node3 = "node_3",
  node4 = "node_4",
  node5 = "node_5",
  node6 = "node_6",
  node7 = "node_7",
  node8 = "node_8",
  node9 = "node_9",
  node10 = "node_10",
  node11 = "node_11",
}

function Hermes({
  activeNodes: baseActiveNodes,
  endTime: initialEndTime,
}: HermesProps) {
  const [activeNodes, setActiveNodes] = useState<Set<Nodes>>(
    baseActiveNodes as Set<Nodes>
  );

  const [endTime, setEndTime] = useState<string>(initialEndTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchActiveNodes = async () => {
        const newActiveNodes = await getActiveNodes();
        setActiveNodes(newActiveNodes as Set<Nodes>);
      };

      const fetchSettings = async () => {
        const newSettings = await getSettings();
        setEndTime(newSettings.end_time);
      };

      fetchActiveNodes();
      fetchSettings();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const time = useTimer({
    targetDate: endTime,
  });

  return (
    <div
      className="h-full w-full flex justify-center items-center"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      <svg
        className="h-screen w-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2218.249 2190.175"
      >
        <defs>
          <clipPath id="YpiqB3JcT1SUkYklMKY8J">
            <path d="M0 0h2218.249v2190.175H0z" />
          </clipPath>
        </defs>
        <path fill="#0f0f0f" d="M0 0h2218.249v2190.175H0z" />
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#1971c2"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1109.482 292.996c31.19 62.73 62.38 125.47 130.71 262.93m-130.71-262.93c33.44 67.26 66.88 134.52 130.71 262.93"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#1971c2"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1200.196 595.923c-30-3.33-150-16.67-180-20m180 20c-30-3.33-150-16.67-180-20"
          />
        </g>

        {!activeNodes.has(Nodes.node1) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#1971c2"
              strokeLinecap="round"
              strokeWidth={4}
              d="M978.137 614.889c15.91 65.56 79.55 327.82 95.46 393.39m-95.46-393.39c15.91 65.56 79.55 327.82 95.46 393.39"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#f08c00"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1519.846 441.127c-6.38 48.84-31.92 244.22-38.3 293.07m38.3-293.07c-6.38 48.84-31.92 244.22-38.3 293.07"
          />
        </g>
        {!activeNodes.has(Nodes.node2) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#f08c00"
              strokeLinecap="round"
              strokeWidth={4}
              d="m1231.586 624.877-115.79 391.78m115.79-391.78-115.79 391.78"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#c2255c"
            strokeLinecap="round"
            strokeWidth={4}
            d="m1808.315 820.807-205.43 235.07m205.43-235.07-205.43 235.07"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#c2255c"
            strokeLinecap="round"
            strokeWidth={4}
            d="m1579.4 1036.857-75.36-246.58m75.36 246.58-75.36-246.58"
          />
        </g>
        {!activeNodes.has(Nodes.node3) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#c2255c"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1439.878 774.847c-49.33 45.25-246.63 226.25-295.96 271.5m295.96-271.5c-49.33 45.25-246.63 226.25-295.96 271.5"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#099268"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1819.43 1299.556c-49.7 11.96-248.49 59.82-298.19 71.79m298.19-71.79c-49.7 11.96-248.49 59.82-298.19 71.79"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#099268"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1499.113 1348.526c13.36-39.31 66.81-196.54 80.17-235.85m-80.17 235.85c13.36-39.31 66.81-196.54 80.17-235.85"
          />
        </g>
        {!activeNodes.has(Nodes.node4) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#099268"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1542.071 1073.749c-65.39 3.3-326.93 16.49-392.31 19.79m392.31-19.79c-65.39 3.3-326.93 16.49-392.31 19.79"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#9c36b5"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1574.781 1672.757c-43.14-20.38-215.72-101.9-258.86-122.28m258.86 122.28c-43.14-20.38-215.72-101.9-258.86-122.28"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#9c36b5"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1318.838 1525.405c26.61-19.82 133.03-99.1 159.64-118.92m-159.64 118.92c26.61-19.82 133.03-99.1 159.64-118.92"
          />
        </g>
        {!activeNodes.has(Nodes.node5) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#9c36b5"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1455.81 1362.89c-54.05-39.43-270.27-197.16-324.33-236.6m324.33 236.6c-54.05-39.43-270.27-197.16-324.33-236.6"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#846358"
            strokeLinecap="round"
            strokeWidth={4}
            d="m1179.359 1850.501-213.52-259.9m213.52 259.9-213.52-259.9"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#846358"
            strokeLinecap="round"
            strokeWidth={4}
            d="M979.78 1575.208c47.67-3.84 238.36-19.21 286.03-23.06m-286.03 23.06c47.67-3.84 238.36-19.21 286.03-23.06"
          />
        </g>

        {!activeNodes.has(Nodes.node6) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#846358"
              strokeLinecap="round"
              strokeWidth={4}
              d="m1271.856 1514.187-172.03-368.83m172.03 368.83-172.03-368.83"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#e8590c"
            strokeLinecap="round"
            strokeWidth={4}
            d="m709.938 1760.656 10.08-305.68m-10.08 305.68 10.08-305.68"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#e8590c"
            strokeLinecap="round"
            strokeWidth={4}
            d="M737.31 1439.401c30.48 19.24 152.4 96.2 182.89 115.45m-182.89-115.45c30.48 19.24 152.4 96.2 182.89 115.45"
          />
        </g>
        {!activeNodes.has(Nodes.node7) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#e8590c"
              strokeLinecap="round"
              strokeWidth={4}
              d="M961.289 1515.785c17.03-61.38 85.16-306.88 102.19-368.26m-102.19 368.26c17.03-61.38 85.16-306.88 102.19-368.26"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#6741d9"
            strokeLinecap="round"
            strokeWidth={4}
            d="M430.393 1502.653c23.04-52.61 115.21-263.05 138.25-315.66m-138.25 315.66c23.04-52.61 115.21-263.05 138.25-315.66"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#6741d9"
            strokeLinecap="round"
            strokeWidth={4}
            d="M594.724 1198.108c17.57 32.58 87.83 162.91 105.4 195.5m-105.4-195.5c17.57 32.58 87.83 162.91 105.4 195.5"
          />
        </g>

        {!activeNodes.has(Nodes.node8) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#6741d9"
              strokeLinecap="round"
              strokeWidth={4}
              d="M741.59 1396.4c47.22-45.92 236.08-229.59 283.3-275.5m-283.3 275.5c47.22-45.92 236.08-229.59 283.3-275.5"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#0c8599"
            strokeLinecap="round"
            strokeWidth={4}
            d="M305.49 1019.203c45.87-20.69 229.36-103.47 275.24-124.16m-275.24 124.16c45.87-20.69 229.36-103.47 275.24-124.16"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#0c8599"
            strokeLinecap="round"
            strokeWidth={4}
            d="M606.954 922.693c-4.58 35.14-22.88 175.72-27.46 210.87m27.46-210.87c-4.58 35.14-22.88 175.72-27.46 210.87"
          />
        </g>
        {!activeNodes.has(Nodes.node9) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#0c8599"
              strokeLinecap="round"
              strokeWidth={4}
              d="M609.568 1148.356c66.81-11.47 334.05-57.37 400.86-68.85m-400.86 68.85c66.81-11.47 334.05-57.37 400.86-68.85"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#e03131"
            strokeLinecap="round"
            strokeWidth={4}
            d="m447.485 619.873 281.12 63.61m-281.12-63.61 281.12 63.61"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#e03131"
            strokeLinecap="round"
            strokeWidth={4}
            d="M736.983 714.264c-19.33 23.83-96.67 119.14-116 142.96m116-142.96c-19.33 23.83-96.67 119.14-116 142.96"
          />
        </g>
        {!activeNodes.has(Nodes.node10) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#e03131"
              strokeLinecap="round"
              strokeWidth={4}
              d="M657.765 894.476c59.88 25.68 299.4 128.41 359.28 154.09m-359.28-154.09c59.88 25.68 299.4 128.41 359.28 154.09"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#2f9e44"
            strokeLinecap="round"
            strokeWidth={4}
            d="M752.593 371.912c32.73 31.77 163.67 158.84 196.4 190.61m-196.4-190.61c32.73 31.77 163.67 158.84 196.4 190.61"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#2f9e44"
            strokeLinecap="round"
            strokeWidth={4}
            d="M949.323 584.63c-28.54 14.58-142.68 72.92-171.21 87.51m171.21-87.51c-28.54 14.58-142.68 72.92-171.21 87.51"
          />
        </g>
        {!activeNodes.has(Nodes.node11) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#2f9e44"
              strokeLinecap="round"
              strokeWidth={4}
              d="m782.364 714.264 261.48 305.04m-261.48-305.04 261.48 305.04"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node1) && (
          <>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="none"
                stroke="#1971c2"
                strokeLinecap="round"
                strokeWidth={4}
                d="M979.228 535.57c8-106.83 16-213.66 32.44-433.1m-32.44 433.1c7.78-103.91 15.57-207.82 32.44-433.1m0 0c92.52 24.02 185.04 48.03 334.78 86.91m-334.78-86.91c114.7 29.78 229.4 59.55 334.78 86.91m0 0c92.89 32.48 185.78 64.97 255.89 89.49m-255.89-89.49c74.37 26 148.73 52.01 255.89 89.49m0 0c63.53 71.81 127.05 143.63 187.63 212.11m-187.63-212.11c61.22 69.2 122.43 138.4 187.63 212.11m0 0c-74.72 123.46-149.43 246.91-222.61 367.83m222.61-367.83c-67.96 112.29-135.92 224.58-222.61 367.83"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="none"
                stroke="#1971c2"
                strokeLinecap="round"
                strokeWidth={4}
                d="M1520.449 907.404c-95.33 41.67-190.67 83.34-369.58 161.55m369.58-161.55c-118.63 51.86-237.27 103.71-369.58 161.55"
              />
            </g>
          </>
        )}
        {activeNodes.has(Nodes.node2) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#f08c00"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1513.228 1214.677c-80.83-22.25-161.66-44.5-371.03-102.14m371.03 102.14c-88.54-24.37-177.08-48.75-371.03-102.14"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node3) && (
          <>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="none"
                stroke="#c2255c"
                strokeLinecap="round"
                strokeWidth={4}
                d="M1513.752 766.908c113.77-24.19 227.54-48.38 369.92-78.65m-369.92 78.65c108.82-23.14 217.65-46.27 369.92-78.65m0 0c25.85 56.66 51.69 113.33 103 225.81m-103-225.81c30.93 67.8 61.85 135.6 103 225.81m0 0-55.9 639.06m55.9-639.06c-21.99 251.36-43.97 502.72-55.9 639.06m0 0-495.99-83.76m495.99 83.76c-193.61-32.69-387.22-65.39-495.99-83.76"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="none"
                stroke="#c2255c"
                strokeLinecap="round"
                strokeWidth={4}
                d="M1380.211 1435.443c-73.75-83.2-147.5-166.4-263.23-296.97m263.23 296.97c-88.07-99.36-176.14-198.72-263.23-296.97"
              />
            </g>
          </>
        )}

        {activeNodes.has(Nodes.node5) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#9c36b5"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1503.835 1396.4c103.95 105.48 207.91 210.97 376.16 381.7m-376.16-381.7c128.87 130.77 257.75 261.54 376.16 381.7m0 0c-183.3 87.58-366.61 175.16-504.95 241.26m504.95-241.26c-146.74 70.11-293.48 140.22-504.95 241.26m0 0c-146.39 19.71-292.78 39.41-432.39 58.21m432.39-58.21c-141.07 18.99-282.14 37.98-432.39 58.21m0 0c-39.47-182.67-78.95-365.33-117.62-544.22m117.62 544.22c-35.9-166.14-71.81-332.28-117.62-544.22"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node8) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#6741d9"
              strokeLinecap="round"
              strokeWidth={4}
              d="M702.659 1436.271c-90.51 73.33-181.02 146.67-339.96 275.44m339.96-275.44c-128.88 104.42-257.76 208.85-339.96 275.44m0 0c-63.41-220.5-126.82-441.01-190.7-663.13m190.7 663.13c-62.93-218.83-125.86-437.67-190.7-663.13m0 0c30.07-122.12 60.15-244.25 81.8-332.16m-81.8 332.16c27.4-111.25 54.79-222.5 81.8-332.16m0 0c102.46 11.73 204.92 23.47 397.59 45.54m-397.59-45.54c105.95 12.13 211.89 24.27 397.59 45.54"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node9) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#0c8599"
              strokeLinecap="round"
              strokeWidth={4}
              d="M547.542 1165.906c-106.85 9.23-213.71 18.46-425.84 36.78m425.84-36.78c-127.86 11.04-255.72 22.09-425.84 36.78m0 0c11.2-255.79 22.4-511.58 28.78-657.42m-28.78 657.42 28.78-657.42m0 0c111.34-81.54 222.68-163.09 298.43-218.56m-298.43 218.56c116.49-85.31 232.98-170.63 298.43-218.56m0 0c99.2 73.18 198.41 146.37 371.28 273.91m-371.28-273.91c77.65 57.28 155.3 114.57 371.28 273.91"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node10) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#e03131"
              strokeLinecap="round"
              strokeWidth={4}
              d="m598.404 877.525-403.57-235.73m403.57 235.73c-110.47-64.53-220.94-129.05-403.57-235.73m0 0c57.26-91.88 114.52-183.76 278.87-447.47m-278.87 447.47c57.74-92.64 115.47-185.29 278.87-447.47m0 0c148.36 21.94 296.71 43.89 476.73 70.52m-476.73-70.52 476.73 70.52m0 0c36.98 71.52 73.97 143.05 157.65 304.87m-157.65-304.87c47.69 92.22 95.38 184.45 157.65 304.87"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node4) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#099268"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1130.914 1540.69c-12.66-96.71-25.33-193.42-51.28-391.64m51.28 391.64c-14.75-112.68-29.51-225.36-51.28-391.64"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node5) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#9c36b5"
              strokeLinecap="round"
              strokeWidth={4}
              d="M827.79 1479.38c79.6-122.85 159.2-245.69 219.28-338.41m-219.28 338.41c63.72-98.34 127.45-196.69 219.28-338.41"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node6) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#846358"
              strokeLinecap="round"
              strokeWidth={4}
              d="M663.042 1295.554c74.09-41.33 148.19-82.67 349.36-194.89m-349.36 194.89c91.86-51.24 183.72-102.49 349.36-194.89"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node7) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#e8590c"
              strokeLinecap="round"
              strokeWidth={4}
              d="M598.389 1031.074c99.5 7.65 198.99 15.31 413.81 31.83m-413.81-31.83c161.08 12.39 322.17 24.78 413.81 31.83"
            />
          </g>
        )}

        {activeNodes.has(Nodes.node8) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#6741d9"
              strokeLinecap="round"
              strokeWidth={4}
              d="M705.416 804.552c106.83 75.89 213.66 151.77 321.28 228.21m-321.28-228.21c106.02 75.31 212.04 150.62 321.28 228.21"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node9) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#0c8599"
              strokeLinecap="round"
              strokeWidth={4}
              d="M845.023 625.504c83.37 149.9 166.73 299.8 214.26 385.26m-214.26-385.26c84.27 151.53 168.55 303.06 214.26 385.26"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node11) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#2f9e44"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1368.182 640.23c-48.93 79.85-97.85 159.7-238.27 388.88m238.27-388.88c-49.33 80.51-98.66 161.03-238.27 388.88"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node10) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#e03131"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1109.771 620.451c-3.46 96.79-6.92 193.58-13.9 388.69m13.9-388.69c-4.04 112.9-8.07 225.8-13.9 388.69"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#f08c00"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1271.734 604.19c70.46 50.8 140.92 101.6 196.09 141.38m-196.09-141.38 196.09 141.38"
          />
        </g>

        {activeNodes.has(Nodes.node10) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M1082.724 565.994h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#e03131"
                stroke="#1971c2"
                strokeWidth={4}
                d="M1082.724 565.994h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={36.144}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={36}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(1090.596 565.592)"
              >
                {"\u134C"}
              </text>
            </g>
          </>
        )}
        {activeNodes.has(Nodes.node11) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M1340.196 635.923h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#2f9e44"
                stroke="#f08c00"
                strokeWidth={4}
                d="M1340.196 635.923h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={36.144}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={36}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(1348.295 636.647)"
              >
                {"\u137C"}
              </text>
            </g>
          </>
        )}
        {activeNodes.has(Nodes.node1) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M1512.817 859.548h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#1971c2"
                stroke="#c2255c"
                strokeWidth={4}
                d="M1512.817 859.548h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={36.144}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={36}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(1522.542 862.07)"
              >
                {"\u1375"}
              </text>
            </g>
          </>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#1971c2"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1125.465 255.57c0 2.18-.15 4.39-.43 6.56-.29 2.16-.72 4.33-1.29 6.42-.57 2.1-1.28 4.18-2.11 6.17-.84 1.99-1.82 3.93-2.9 5.77a45.863 45.863 0 0 1-3.63 5.26 44.008 44.008 0 0 1-4.28 4.65 43.252 43.252 0 0 1-4.84 3.95 41.903 41.903 0 0 1-5.31 3.15c-1.83.91-3.74 1.68-5.67 2.3a40.24 40.24 0 0 1-5.91 1.39c-1.99.32-4.02.47-6.03.47-2.01 0-4.04-.15-6.04-.47a40.24 40.24 0 0 1-5.91-1.39c-1.93-.62-3.83-1.39-5.66-2.3a41.903 41.903 0 0 1-10.16-7.1 42.88 42.88 0 0 1-4.27-4.65 45.863 45.863 0 0 1-3.63-5.26 47.867 47.867 0 0 1-2.9-5.77 48.75 48.75 0 0 1-2.11-6.17c-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.56-2.1 1.28-4.17 2.11-6.16a47.14 47.14 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.31-1.65 2.75-3.22 4.27-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.83-.91 3.73-1.69 5.66-2.3 1.93-.62 3.92-1.09 5.91-1.4 2-.31 4.03-.47 6.04-.47s4.04.16 6.03.47c1.99.31 3.98.78 5.91 1.4 1.93.61 3.84 1.39 5.67 2.3 1.83.9 3.62 1.97 5.31 3.15a43.16 43.16 0 0 1 4.84 3.94c1.52 1.43 2.96 3 4.28 4.65 1.32 1.65 2.54 3.43 3.63 5.27 1.08 1.83 2.06 3.78 2.9 5.77.83 1.99 1.54 4.06 2.11 6.16.57 2.1 1 4.26 1.29 6.43.28 2.16.35 5.46.43 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={74.368}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={74.072}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1059.318 205.48)"
          >
            {"\uA3E6"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#c2255c"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1885.126 792.485c0 2.18-.15 4.39-.44 6.56a48.794 48.794 0 0 1-3.4 12.59c-.84 1.99-1.82 3.93-2.9 5.77a45.94 45.94 0 0 1-3.64 5.26 42.967 42.967 0 0 1-4.28 4.65 42.467 42.467 0 0 1-4.85 3.95 41.326 41.326 0 0 1-10.99 5.45c-1.94.61-3.93 1.08-5.92 1.39-2 .32-4.03.47-6.05.47-2.01 0-4.05-.15-6.04-.47-1.99-.31-3.99-.78-5.92-1.39-1.93-.62-3.84-1.39-5.68-2.3a41.903 41.903 0 0 1-10.16-7.1 43.055 43.055 0 0 1-4.29-4.65 46.444 46.444 0 0 1-6.53-11.03c-.84-1.99-1.55-4.07-2.12-6.17-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.57-2.1 1.28-4.17 2.12-6.16a45.76 45.76 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.32-1.65 2.76-3.22 4.29-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.84-.91 3.75-1.69 5.68-2.3 1.93-.62 3.93-1.09 5.92-1.4 1.99-.31 4.03-.47 6.04-.47 2.02 0 4.05.16 6.05.47 1.99.31 3.98.78 5.92 1.4 1.93.61 3.84 1.39 5.67 2.3 1.84.9 3.63 1.97 5.32 3.15 1.7 1.18 3.33 2.51 4.85 3.94 1.52 1.43 2.97 3 4.28 4.65 1.32 1.65 2.55 3.43 3.64 5.27 1.08 1.83 2.06 3.78 2.9 5.77.84 1.99 1.55 4.06 2.12 6.16.56 2.1 1 4.26 1.28 6.43.29 2.16.36 5.46.44 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={86.091}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={85.748}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1814.127 735.923)"
          >
            {"\uA175"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#f08c00"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1564.996 394.55c0 2.18-.15 4.39-.43 6.56-.29 2.16-.72 4.33-1.29 6.42-.57 2.1-1.28 4.18-2.11 6.17-.84 1.99-1.82 3.93-2.9 5.77a45.863 45.863 0 0 1-3.63 5.26 44.008 44.008 0 0 1-4.28 4.65 43.252 43.252 0 0 1-4.84 3.95 41.903 41.903 0 0 1-5.31 3.15c-1.83.91-3.74 1.68-5.67 2.3a40.24 40.24 0 0 1-5.91 1.39c-1.99.32-4.02.47-6.03.47-2.01 0-4.04-.15-6.04-.47a40.24 40.24 0 0 1-5.91-1.39c-1.93-.62-3.83-1.39-5.66-2.3a41.903 41.903 0 0 1-10.16-7.1 42.88 42.88 0 0 1-4.27-4.65 45.863 45.863 0 0 1-3.63-5.26 47.867 47.867 0 0 1-2.9-5.77 48.75 48.75 0 0 1-2.11-6.17c-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.56-2.1 1.28-4.17 2.11-6.16a47.14 47.14 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.31-1.65 2.75-3.22 4.27-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.83-.91 3.73-1.69 5.66-2.3 1.93-.62 3.92-1.09 5.91-1.4 2-.31 4.03-.47 6.04-.47s4.04.16 6.03.47c1.99.31 3.98.78 5.91 1.4 1.93.61 3.84 1.39 5.67 2.3 1.83.9 3.62 1.97 5.31 3.15a43.16 43.16 0 0 1 4.84 3.94c1.52 1.43 2.96 3 4.28 4.65 1.32 1.65 2.54 3.43 3.63 5.27 1.08 1.83 2.06 3.78 2.9 5.77.83 1.99 1.54 4.06 2.11 6.16.57 2.1 1 4.26 1.29 6.43.28 2.16.35 5.46.43 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={91.19}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={90.826}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1497.906 335.923)"
          >
            {"\uA149"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#099268"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1905.126 1303.721c0 2.18-.15 4.39-.44 6.56a48.794 48.794 0 0 1-3.4 12.59c-.84 1.99-1.82 3.93-2.9 5.77a45.94 45.94 0 0 1-3.64 5.26 42.967 42.967 0 0 1-4.28 4.65 42.467 42.467 0 0 1-4.85 3.95 41.326 41.326 0 0 1-10.99 5.45c-1.94.61-3.93 1.08-5.92 1.39-2 .32-4.03.47-6.05.47-2.01 0-4.05-.15-6.04-.47-1.99-.31-3.99-.78-5.92-1.39-1.93-.62-3.84-1.39-5.68-2.3a41.903 41.903 0 0 1-10.16-7.1 43.055 43.055 0 0 1-4.29-4.65 46.444 46.444 0 0 1-6.53-11.03c-.84-1.99-1.55-4.07-2.12-6.17-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.57-2.1 1.28-4.17 2.12-6.16a45.76 45.76 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.32-1.65 2.76-3.22 4.29-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.84-.91 3.75-1.69 5.68-2.3 1.93-.62 3.93-1.09 5.92-1.4 1.99-.31 4.03-.47 6.04-.47 2.02 0 4.05.16 6.05.47 1.99.31 3.98.78 5.92 1.4 1.93.61 3.84 1.39 5.67 2.3 1.84.9 3.63 1.97 5.32 3.15 1.7 1.18 3.33 2.51 4.85 3.94 1.52 1.43 2.97 3 4.28 4.65 1.32 1.65 2.55 3.43 3.64 5.27 1.08 1.83 2.06 3.78 2.9 5.77.84 1.99 1.55 4.06 2.12 6.16.56 2.1 1 4.26 1.28 6.43.29 2.16.36 5.46.44 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={77.203}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={76.895}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1838.445 1255.923)"
          >
            {"\uA1D0"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#846358"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1252.448 1886.468c0 2.18-.15 4.39-.44 6.56a48.794 48.794 0 0 1-3.4 12.59c-.84 1.99-1.82 3.93-2.9 5.77a45.94 45.94 0 0 1-3.64 5.26 42.967 42.967 0 0 1-4.28 4.65 42.467 42.467 0 0 1-4.85 3.95 41.326 41.326 0 0 1-10.99 5.45c-1.94.61-3.93 1.08-5.92 1.39-2 .32-4.03.47-6.05.47-2.01 0-4.05-.15-6.04-.47-1.99-.31-3.99-.78-5.92-1.39-1.93-.62-3.84-1.39-5.68-2.3a41.903 41.903 0 0 1-10.16-7.1 43.055 43.055 0 0 1-4.29-4.65 46.444 46.444 0 0 1-6.53-11.03c-.84-1.99-1.55-4.07-2.12-6.17-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.57-2.1 1.28-4.17 2.12-6.16a45.76 45.76 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.32-1.65 2.76-3.22 4.29-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.84-.91 3.75-1.69 5.68-2.3 1.93-.62 3.93-1.09 5.92-1.4 1.99-.31 4.03-.47 6.04-.47 2.02 0 4.05.16 6.05.47 1.99.31 3.98.78 5.92 1.4 1.93.61 3.84 1.39 5.67 2.3 1.84.9 3.63 1.97 5.32 3.15 1.7 1.18 3.33 2.51 4.85 3.94 1.52 1.43 2.97 3 4.28 4.65 1.32 1.65 2.55 3.43 3.64 5.27 1.08 1.83 2.06 3.78 2.9 5.77.84 1.99 1.55 4.06 2.12 6.16.56 2.1 1 4.26 1.28 6.43.29 2.16.36 5.46.44 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={86.891}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={86.544}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1182.48 1835.134)"
          >
            {"\uA078"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#9c36b5"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1655.95 1696.434c0 2.18-.15 4.39-.44 6.56a48.794 48.794 0 0 1-3.4 12.59c-.84 1.99-1.82 3.93-2.9 5.77a45.94 45.94 0 0 1-3.64 5.26 42.967 42.967 0 0 1-4.28 4.65 42.467 42.467 0 0 1-4.85 3.95 41.326 41.326 0 0 1-10.99 5.45c-1.94.61-3.93 1.08-5.92 1.39-2 .32-4.03.47-6.05.47-2.01 0-4.05-.15-6.04-.47-1.99-.31-3.99-.78-5.92-1.39-1.93-.62-3.84-1.39-5.68-2.3a41.903 41.903 0 0 1-10.16-7.1 43.055 43.055 0 0 1-4.29-4.65 46.444 46.444 0 0 1-6.53-11.03c-.84-1.99-1.55-4.07-2.12-6.17-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.57-2.1 1.28-4.17 2.12-6.16a45.76 45.76 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.32-1.65 2.76-3.22 4.29-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.84-.91 3.75-1.69 5.68-2.3 1.93-.62 3.93-1.09 5.92-1.4 1.99-.31 4.03-.47 6.04-.47 2.02 0 4.05.16 6.05.47 1.99.31 3.98.78 5.92 1.4 1.93.61 3.84 1.39 5.67 2.3 1.84.9 3.63 1.97 5.32 3.15 1.7 1.18 3.33 2.51 4.85 3.94 1.52 1.43 2.97 3 4.28 4.65 1.32 1.65 2.55 3.43 3.64 5.27 1.08 1.83 2.06 3.78 2.9 5.77.84 1.99 1.55 4.06 2.12 6.16.56 2.1 1 4.26 1.28 6.43.29 2.16.36 5.46.44 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={74.287}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={73.991}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1592.952 1650.32)"
          >
            {"\uA42F"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#e8590c"
            strokeLinecap="round"
            strokeWidth={4}
            d="M745.126 1806.664c0 2.18-.15 4.39-.44 6.56a48.794 48.794 0 0 1-3.4 12.59c-.84 1.99-1.82 3.93-2.9 5.77a45.94 45.94 0 0 1-3.64 5.26 42.967 42.967 0 0 1-4.28 4.65 42.467 42.467 0 0 1-4.85 3.95 41.326 41.326 0 0 1-10.99 5.45c-1.94.61-3.93 1.08-5.92 1.39-2 .32-4.03.47-6.05.47-2.01 0-4.05-.15-6.04-.47-1.99-.31-3.99-.78-5.92-1.39-1.93-.62-3.84-1.39-5.68-2.3a41.903 41.903 0 0 1-10.16-7.1 43.055 43.055 0 0 1-4.29-4.65 46.444 46.444 0 0 1-6.53-11.03c-.84-1.99-1.55-4.07-2.12-6.17-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.57-2.1 1.28-4.17 2.12-6.16a45.76 45.76 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.32-1.65 2.76-3.22 4.29-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.84-.91 3.75-1.69 5.68-2.3 1.93-.62 3.93-1.09 5.92-1.4 1.99-.31 4.03-.47 6.04-.47 2.02 0 4.05.16 6.05.47 1.99.31 3.98.78 5.92 1.4 1.93.61 3.84 1.39 5.67 2.3 1.84.9 3.63 1.97 5.32 3.15 1.7 1.18 3.33 2.51 4.85 3.94 1.52 1.43 2.97 3 4.28 4.65 1.32 1.65 2.55 3.43 3.64 5.27 1.08 1.83 2.06 3.78 2.9 5.77.84 1.99 1.55 4.06 2.12 6.16.56 2.1 1 4.26 1.28 6.43.29 2.16.36 5.46.44 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={77.591}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={77.282}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(679.953 1755.923)"
          >
            {"\uA09A"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#0c8599"
            strokeLinecap="round"
            strokeWidth={4}
            d="M305.126 1034.515c0 2.18-.15 4.39-.44 6.56a48.794 48.794 0 0 1-3.4 12.59c-.84 1.99-1.82 3.93-2.9 5.77a45.94 45.94 0 0 1-3.64 5.26 42.967 42.967 0 0 1-4.28 4.65 42.467 42.467 0 0 1-4.85 3.95 41.326 41.326 0 0 1-10.99 5.45c-1.94.61-3.93 1.08-5.92 1.39-2 .32-4.03.47-6.05.47-2.01 0-4.05-.15-6.04-.47-1.99-.31-3.99-.78-5.92-1.39-1.93-.62-3.84-1.39-5.68-2.3a41.903 41.903 0 0 1-10.16-7.1 43.055 43.055 0 0 1-4.29-4.65 46.444 46.444 0 0 1-6.53-11.03c-.84-1.99-1.55-4.07-2.12-6.17-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.57-2.1 1.28-4.17 2.12-6.16a45.76 45.76 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.32-1.65 2.76-3.22 4.29-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.84-.91 3.75-1.69 5.68-2.3 1.93-.62 3.93-1.09 5.92-1.4 1.99-.31 4.03-.47 6.04-.47 2.02 0 4.05.16 6.05.47 1.99.31 3.98.78 5.92 1.4 1.93.61 3.84 1.39 5.67 2.3 1.84.9 3.63 1.97 5.32 3.15 1.7 1.18 3.33 2.51 4.85 3.94 1.52 1.43 2.97 3 4.28 4.65 1.32 1.65 2.55 3.43 3.64 5.27 1.08 1.83 2.06 3.78 2.9 5.77.84 1.99 1.55 4.06 2.12 6.16.56 2.1 1 4.26 1.28 6.43.29 2.16.36 5.46.44 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={87.756}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={87.406}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(237.977 975.923)"
          >
            {"\uA19C"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#e03131"
            strokeLinecap="round"
            strokeWidth={4}
            d="M445.126 615.144c0 2.19-.15 4.4-.44 6.57-.28 2.17-.72 4.33-1.28 6.43-.57 2.1-1.28 4.18-2.12 6.17-.84 1.99-1.82 3.94-2.9 5.78a46.061 46.061 0 0 1-3.64 5.27 44.029 44.029 0 0 1-4.28 4.66 42.379 42.379 0 0 1-4.85 3.94 40.277 40.277 0 0 1-5.32 3.16c-1.83.91-3.74 1.68-5.67 2.3-1.94.62-3.93 1.09-5.92 1.4-2 .31-4.03.47-6.05.47-2.01 0-4.05-.16-6.04-.47-1.99-.31-3.99-.78-5.92-1.4-1.93-.62-3.84-1.39-5.68-2.3-1.83-.91-3.62-1.97-5.31-3.16-1.7-1.18-3.33-2.51-4.85-3.94-1.53-1.44-2.97-3-4.29-4.66a45.985 45.985 0 0 1-3.63-5.27 46.574 46.574 0 0 1-2.9-5.78c-.84-1.99-1.55-4.07-2.12-6.17-.57-2.1-1-4.26-1.29-6.43a51.53 51.53 0 0 1-.43-6.57c0-2.18.15-4.4.43-6.56.29-2.17.72-4.34 1.29-6.44.57-2.1 1.28-4.17 2.12-6.16.83-2 1.81-3.94 2.9-5.78 1.09-1.84 2.31-3.62 3.63-5.27 1.32-1.66 2.76-3.23 4.29-4.66 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.19 3.48-2.25 5.31-3.16 1.84-.91 3.75-1.68 5.68-2.3 1.93-.62 3.93-1.09 5.92-1.4 1.99-.31 4.03-.47 6.04-.47 2.02 0 4.05.16 6.05.47 1.99.31 3.98.78 5.92 1.4 1.93.62 3.84 1.39 5.67 2.3 1.84.91 3.63 1.97 5.32 3.16 1.7 1.18 3.33 2.51 4.85 3.94 1.52 1.43 2.97 3 4.28 4.66 1.32 1.65 2.55 3.43 3.64 5.27a48.747 48.747 0 0 1 5.02 11.94c.56 2.1 1 4.27 1.28 6.44.29 2.16.36 5.47.44 6.56.07 1.1.07-1.09 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={89.862}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={89.504}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(376.211 555.923)"
          >
            {"\uA006"}
          </text>
        </g>

        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#2f9e44"
            strokeLinecap="round"
            strokeWidth={4}
            d="M765.958 337.293c0 2.18-.15 4.39-.43 6.56-.29 2.16-.72 4.33-1.29 6.42-.57 2.1-1.28 4.18-2.11 6.17-.84 1.99-1.82 3.93-2.9 5.77a45.863 45.863 0 0 1-3.63 5.26 44.008 44.008 0 0 1-4.28 4.65 43.252 43.252 0 0 1-4.84 3.95 41.903 41.903 0 0 1-5.31 3.15c-1.83.91-3.74 1.68-5.67 2.3a40.24 40.24 0 0 1-5.91 1.39c-1.99.32-4.02.47-6.03.47-2.01 0-4.04-.15-6.04-.47a40.24 40.24 0 0 1-5.91-1.39c-1.93-.62-3.83-1.39-5.66-2.3a41.903 41.903 0 0 1-10.16-7.1 42.88 42.88 0 0 1-4.27-4.65 45.863 45.863 0 0 1-3.63-5.26 47.867 47.867 0 0 1-2.9-5.77 48.75 48.75 0 0 1-2.11-6.17c-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.56-2.1 1.28-4.17 2.11-6.16a47.14 47.14 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.31-1.65 2.75-3.22 4.27-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.83-.91 3.73-1.69 5.66-2.3 1.93-.62 3.92-1.09 5.91-1.4 2-.31 4.03-.47 6.04-.47s4.04.16 6.03.47c1.99.31 3.98.78 5.91 1.4 1.93.61 3.84 1.39 5.67 2.3 1.83.9 3.62 1.97 5.31 3.15a43.16 43.16 0 0 1 4.84 3.94c1.52 1.43 2.96 3 4.28 4.65 1.32 1.65 2.54 3.43 3.63 5.27 1.08 1.83 2.06 3.78 2.9 5.77.83 1.99 1.54 4.06 2.11 6.16.57 2.1 1 4.26 1.29 6.43.28 2.16.35 5.46.43 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={82.954}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={82.624}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(695.825 284.837)"
          >
            {"\uA052"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#6741d9"
            strokeLinecap="round"
            strokeWidth={4}
            d="M453.949 1545.534c0 2.18-.15 4.39-.44 6.56a48.794 48.794 0 0 1-3.4 12.59c-.84 1.99-1.82 3.93-2.9 5.77a45.94 45.94 0 0 1-3.64 5.26 42.967 42.967 0 0 1-4.28 4.65 42.467 42.467 0 0 1-4.85 3.95 41.326 41.326 0 0 1-10.99 5.45c-1.94.61-3.93 1.08-5.92 1.39-2 .32-4.03.47-6.05.47-2.01 0-4.05-.15-6.04-.47-1.99-.31-3.99-.78-5.92-1.39-1.93-.62-3.84-1.39-5.68-2.3a41.903 41.903 0 0 1-10.16-7.1 43.055 43.055 0 0 1-4.29-4.65 46.444 46.444 0 0 1-6.53-11.03c-.84-1.99-1.55-4.07-2.12-6.17-.57-2.09-1-4.26-1.29-6.42-.28-2.17-.43-4.38-.43-6.56 0-2.19.15-4.4.43-6.56.29-2.17.72-4.33 1.29-6.43.57-2.1 1.28-4.17 2.12-6.16a45.76 45.76 0 0 1 2.9-5.77c1.09-1.84 2.31-3.62 3.63-5.27 1.32-1.65 2.76-3.22 4.29-4.65 1.52-1.43 3.15-2.76 4.85-3.94 1.69-1.18 3.48-2.25 5.31-3.15 1.84-.91 3.75-1.69 5.68-2.3 1.93-.62 3.93-1.09 5.92-1.4 1.99-.31 4.03-.47 6.04-.47 2.02 0 4.05.16 6.05.47 1.99.31 3.98.78 5.92 1.4 1.93.61 3.84 1.39 5.67 2.3 1.84.9 3.63 1.97 5.32 3.15 1.7 1.18 3.33 2.51 4.85 3.94 1.52 1.43 2.97 3 4.28 4.65 1.32 1.65 2.55 3.43 3.64 5.27 1.08 1.83 2.06 3.78 2.9 5.77.84 1.99 1.55 4.06 2.12 6.16.56 2.1 1 4.26 1.28 6.43.29 2.16.36 5.46.44 6.56.07 1.09.07-1.1 0 0"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={80.94}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={80.618}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(381.548 1493.33)"
          >
            {"\uA08A"}
          </text>
        </g>
        {activeNodes.has(Nodes.node4) && (
          <>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="none"
                stroke="#099268"
                strokeLinecap="round"
                strokeWidth={4}
                d="M1619.448 1074.864c114.28 16.77 228.57 33.55 311.44 45.71m-311.44-45.71c67.88 9.96 135.76 19.92 311.44 45.71m0 0c36.09 91.53 72.18 183.07 111.24 282.13m-111.24-282.13c28.36 71.94 56.73 143.88 111.24 282.13m0 0c-33.28 56.51-66.56 113.02-161.76 274.68m161.76-274.68c-48.63 82.57-97.25 165.14-161.76 274.68m0 0-280.12 193.19m280.12-193.19c-94.54 65.2-189.08 130.4-280.12 193.19m0 0c-61.6 2.32-123.2 4.65-196.11 7.41m196.11-7.41c-71.76 2.71-143.52 5.42-196.11 7.41m0 0-178.86-173.04m178.86 173.04c-47.61-46.06-95.22-92.12-178.86-173.04m0 0c-22.51-33.02-45.03-66.05-74.41-109.16m74.41 109.16c-19.44-28.51-38.88-57.03-74.41-109.16"
              />
            </g>
          </>
        )}
        {activeNodes.has(Nodes.node11) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#2f9e44"
              strokeLinecap="round"
              strokeWidth={4}
              d="M750.278 663.121c-32.61-33.95-65.22-67.9-149.5-155.65m149.5 155.65c-38.16-39.73-76.33-79.46-149.5-155.65m0 0c5.68-52.64 11.35-105.28 23.12-214.4m-23.12 214.4c6.51-60.34 13.02-120.68 23.12-214.4m0 0c56.61-50.83 113.22-101.66 235.59-211.54m-235.59 211.54c76.1-68.33 152.2-136.66 235.59-211.54m0 0c95.58-9.11 191.16-18.23 344.74-32.88m-344.74 32.88c122.09-11.64 244.18-23.29 344.74-32.88m0 0c84.4 35.33 168.79 70.65 211.6 88.57m-211.6-88.57c42.36 17.73 84.71 35.46 211.6 88.57m0 0c9.75 108.69 19.5 217.38 35.13 391.52m-35.13-391.52c9.66 107.7 19.33 215.4 35.13 391.52m0 0c-15.55 29.44-31.1 58.88-55.8 105.66m55.8-105.66c-17.8 33.71-35.61 67.42-55.8 105.66"
            />
          </g>
        )}
        {activeNodes.has(Nodes.node7) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#e8590c"
              strokeLinecap="round"
              strokeWidth={4}
              d="M943.771 1580.497c-56.11 107.79-112.23 215.59-146.53 281.48m146.53-281.48c-36.49 70.1-72.98 140.19-146.53 281.48m0 0c-68.06 25.45-136.12 50.9-267.28 99.94m267.28-99.94c-90.05 33.67-180.09 67.34-267.28 99.94m0 0c-74.23-36.6-148.47-73.2-205.39-101.27m205.39 101.27c-69.43-34.23-138.86-68.46-205.39-101.27m0 0c-49.72-76.81-99.45-153.61-125.27-193.5m125.27 193.5c-38.56-59.56-77.12-119.13-125.27-193.5m0 0c-5.8-65.32-11.59-130.63-26.07-293.73m26.07 293.73c-9.2-103.64-18.4-207.28-26.07-293.73m0 0c43.3-75.09 86.6-150.17 131.63-228.24m-131.63 228.24c48.48-84.08 96.97-168.15 131.63-228.24m0 0c76.01-35.03 152.02-70.06 252.85-116.52m-252.85 116.52c95.02-43.79 190.04-87.57 252.85-116.52"
            />
          </g>
        )}

        {activeNodes.has(Nodes.node6) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#846358"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1297.303 1569.44c35.44 61.48 70.89 122.95 117.23 203.34m-117.23-203.34c40.7 70.59 81.39 141.18 117.23 203.34m0 0c-23.66 72.66-47.31 145.33-103.72 318.63m103.72-318.63c-41.02 126-82.03 252-103.72 318.63m0 0c-81.28 14.33-162.56 28.66-317.65 56.01m317.65-56.01c-80.22 14.14-160.44 28.29-317.65 56.01m0 0c-140.27-21.12-280.54-42.24-400.53-60.31m400.53 60.31c-90.89-13.69-181.78-27.37-400.53-60.31m0 0c-27.84-60.55-55.67-121.09-88.62-192.77m88.62 192.77c-23.89-51.97-47.79-103.95-88.62-192.77m0 0c13.39-136.2 26.79-272.4 40.99-416.79m-40.99 416.79c9.7-98.66 19.41-197.33 40.99-416.79m0 0c18.92-41.55 37.84-83.1 67.29-147.78m-67.29 147.78c23.69-52.01 47.37-104.02 67.29-147.78"
            />
          </g>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={40.134}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={39.974}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1556.813 1049.64)"
          >
            {"\u12CC"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#099268"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1580.196 1035.923c11.13 11.35 22.26 22.7 38.25 39m-38.25-39c13.25 13.51 26.5 27.01 38.25 39m0 0c-9.92 10.07-19.84 20.15-38.25 38.85m38.25-38.85c-14.41 14.63-28.81 29.27-38.25 38.85m0 0c-15.22-14.78-30.43-29.56-40-38.85m40 38.85-40-38.85m0 0c12.47-12.16 24.94-24.32 40-39m-40 39c15.76-15.36 31.52-30.73 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={40.839}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={40.677}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1468.141 1349.355)"
          >
            {"\u127E"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#9c36b5"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1485.352 1335.45c9.63 9.86 19.25 19.72 38.06 39m-38.06-39c9.16 9.39 18.32 18.77 38.06 39m0 0c-13.95 14.24-27.9 28.47-38.06 38.85m38.06-38.85-38.06 38.85m0 0c-12.24-11.89-24.48-23.78-40-38.85m40 38.85c-14.07-13.67-28.14-27.34-40-38.85m0 0c15.94-15.54 31.87-31.08 40-39m-40 39c10.72-10.45 21.45-20.91 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={45.911}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={45.728}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1270.661 1500.968)"
          >
            {"\u12FD"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#846358"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1290.312 1498.075c8.61 8.83 17.23 17.65 38.06 39m-38.06-39c12.1 12.39 24.19 24.79 38.06 39m0 0c-10.82 11.04-21.64 22.09-38.06 38.85m38.06-38.85c-10.35 10.57-20.71 21.14-38.06 38.85m0 0c-11.63-11.3-23.26-22.6-40-38.85m40 38.85c-14.85-14.42-29.69-28.84-40-38.85m0 0c9.46-9.22 18.92-18.44 40-39m-40 39c8.16-7.96 16.33-15.92 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={36.144}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={36}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(937.566 1530.189)"
          >
            {"\u132E"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#e8590c"
            strokeLinecap="round"
            strokeWidth={4}
            d="M960.196 1515.923c13.17 13.49 26.33 26.98 38.06 39m-38.06-39c10.96 11.22 21.91 22.45 38.06 39m0 0c-15.18 15.5-30.36 30.99-38.06 38.85m38.06-38.85c-10.56 10.78-21.12 21.56-38.06 38.85m0 0c-10.81-10.5-21.62-21-40-38.85m40 38.85c-9.55-9.28-19.1-18.55-40-38.85m0 0c8.94-8.71 17.87-17.43 40-39m-40 39c11.7-11.41 23.4-22.81 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={46.26}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={46.076}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(706.23 1382.118)"
          >
            {"\u136C"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#6741d9"
            strokeLinecap="round"
            strokeWidth={4}
            d="m720.196 1375.923 38.06 39m-38.06-39c12.1 12.39 24.19 24.79 38.06 39m0 0c-10.89 11.12-21.79 22.24-38.06 38.85m38.06-38.85c-13.82 14.11-27.65 28.22-38.06 38.85m0 0c-13.97-13.57-27.93-27.13-40-38.85m40 38.85c-12.76-12.4-25.52-24.79-40-38.85m0 0 40-39m-40 39c9.7-9.46 19.4-18.91 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={46.625}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={46.439}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(571.029 1131.827)"
          >
            {"\u1344"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#0c8599"
            strokeLinecap="round"
            strokeWidth={4}
            d="M588.068 1127.04c14.39 14.75 28.78 29.49 38.06 39m-38.06-39c13.54 13.87 27.08 27.74 38.06 39m0 0c-11.74 11.99-23.49 23.98-38.06 38.85m38.06-38.85c-9.02 9.21-18.05 18.43-38.06 38.85m0 0c-8.49-8.25-16.98-16.5-40-38.85m40 38.85c-14.99-14.56-29.99-29.12-40-38.85m0 0c15.84-15.44 31.68-30.89 40-39m-40 39c10.09-9.84 20.18-19.68 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={33.108}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={32.976}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(596.851 869.34)"
          >
            {"\u1327"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#e03131"
            strokeLinecap="round"
            strokeWidth={4}
            d="M620.196 855.923c15.18 15.55 30.35 31.1 38.06 39m-38.06-39c10.61 10.87 21.22 21.74 38.06 39m0 0c-12.52 12.79-25.05 25.57-38.06 38.85m38.06-38.85c-11.67 11.92-23.35 23.83-38.06 38.85m0 0c-14.75-14.33-29.5-28.65-40-38.85m40 38.85c-8.98-8.73-17.97-17.45-40-38.85m0 0c15.71-15.32 31.42-30.63 40-39m-40 39c8.28-8.07 16.56-16.15 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={49.557}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={49.36}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(743.705 661.911)"
          >
            {"\u1204"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#2f9e44"
            strokeLinecap="round"
            strokeWidth={4}
            d="m760.196 655.923 38.06 39m-38.06-39c11.92 12.22 23.85 24.44 38.06 39m0 0c-15.16 15.47-30.31 30.94-38.06 38.85m38.06-38.85c-10.5 10.72-21 21.43-38.06 38.85m0 0c-12.05-11.71-24.11-23.42-40-38.85m40 38.85c-14.06-13.66-28.12-27.32-40-38.85m0 0c11.52-11.24 23.05-22.47 40-39m-40 39c11.77-11.48 23.55-22.96 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={43.95}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={43.775}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(958.798 544.489)"
          >
            {"\u12AF"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#1971c2"
            strokeLinecap="round"
            strokeWidth={4}
            d="M980.196 535.923c8.42 8.63 16.84 17.26 38.06 39m-38.06-39c15.14 15.51 30.28 31.02 38.06 39m0 0c-8.72 8.9-17.44 17.8-38.06 38.85m38.06-38.85c-14.05 14.35-28.11 28.7-38.06 38.85m0 0c-11.7-11.36-23.39-22.72-40-38.85m40 38.85c-14.41-14-28.83-28-40-38.85m0 0c11.42-11.14 22.85-22.28 40-39m-40 39c9.28-9.05 18.57-18.1 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={35.268}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={35.128}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1225.942 571.883)"
          >
            {"\u123E"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#f08c00"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1240.196 555.923c13.85 14.19 27.69 28.37 38.06 39m-38.06-39c12.85 13.17 25.7 26.33 38.06 39m0 0c-7.89 8.06-15.79 16.12-38.06 38.85m38.06-38.85c-13.87 14.16-27.75 28.32-38.06 38.85m0 0c-15.78-15.33-31.56-30.65-40-38.85m40 38.85c-15.37-14.93-30.74-29.86-40-38.85m0 0c9.95-9.7 19.9-19.4 40-39m-40 39c12.59-12.27 25.18-24.55 40-39"
          />
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={36.144}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontFamily="Nunito, Segoe UI Emoji"
            fontSize={36}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1458.847 751.463)"
          >
            {"\u1287"}
          </text>
        </g>
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#c2255c"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1480.196 735.923c12.71 13.02 25.41 26.04 38.06 39m-38.06-39c14.34 14.69 28.67 29.38 38.06 39m0 0c-14.59 14.89-29.18 29.78-38.06 38.85m38.06-38.85c-8.33 8.5-16.66 17.01-38.06 38.85m0 0c-12.41-12.06-24.82-24.11-40-38.85m40 38.85c-9.91-9.62-19.81-19.24-40-38.85m0 0c15.96-15.56 31.93-31.13 40-39m-40 39c11.55-11.26 23.1-22.52 40-39"
          />
        </g>
        {activeNodes.has(Nodes.node2) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M1514.048 1213.44h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#f08c00"
                stroke="#099268"
                strokeWidth={4}
                d="M1514.048 1213.44h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={36.144}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={36}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(1524.727 1214.623)"
              >
                {"\u1301"}
              </text>
            </g>
          </>
        )}

        {activeNodes.has(Nodes.node3) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M1380.196 1435.923h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#c2255c"
                stroke="#9c36b5"
                strokeWidth={4}
                d="M1380.196 1435.923h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={36.144}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={36}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(1385.153 1437.705)"
              >
                {"\u12E5"}
              </text>
            </g>
          </>
        )}

        {activeNodes.has(Nodes.node4) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M1108.524 1541.63h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#099268"
                stroke="#846358"
                strokeWidth={4}
                d="M1108.524 1541.63h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={36.144}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={36}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(1120.426 1541.845)"
              >
                {"\u135A"}
              </text>
            </g>
          </>
        )}

        {activeNodes.has(Nodes.node5) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M797.742 1479.663h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#9c36b5"
                stroke="#e8590c"
                strokeWidth={4}
                d="M797.742 1479.663h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={36.144}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={36}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(807.27 1479.198)"
              >
                {"\u12DF"}
              </text>
            </g>
          </>
        )}
        {activeNodes.has(Nodes.node6) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M612.07 1277.004h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#846358"
                stroke="#6741d9"
                strokeWidth={4}
                d="M612.07 1277.004h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={36.144}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={36}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(625.004 1278.532)"
              >
                {"\u12EA"}
              </text>
            </g>
          </>
        )}
        {activeNodes.has(Nodes.node7) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M560.196 995.923h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#e8590c"
                stroke="#0c8599"
                strokeWidth={4}
                d="M560.196 995.923h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={36.144}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={36}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(564.067 998.577)"
              >
                {"\u1219"}
              </text>
            </g>
          </>
        )}
        {activeNodes.has(Nodes.node8) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M651.459 752.458h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#6741d9"
                stroke="#e03131"
                strokeWidth={4}
                d="M651.459 752.458h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={45.331}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={45.15}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(662.085 746.555)"
              >
                {"\u130F"}
              </text>
            </g>
          </>
        )}

        {activeNodes.has(Nodes.node9) && (
          <>
            <g strokeLinecap="round" clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <path
                fill="#0f0f0f"
                strokeWidth={0}
                d="M820.196 600.602h54.59v52.33h-54.59"
              />
              <path
                fill="none"
                // stroke="#0c8599"
                stroke="#2f9e44"
                strokeWidth={4}
                d="M820.196 600.602h54.59m-54.59 0h54.59m0 0v52.33m0-52.33v52.33m0 0h-54.59m54.59 0h-54.59m0 0v-52.33m0 52.33v-52.33"
              />
            </g>
            <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
              <text
                y={44.274}
                fill="#f9fafb"
                dominantBaseline="alphabetic"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize={44.098}
                style={{
                  whiteSpace: "pre",
                }}
                transform="translate(829.738 595.923)"
              >
                {"\u1374"}
              </text>
            </g>
          </>
        )}
        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <path
            fill="none"
            stroke="#f9fafb"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1150.658 1078.397c0 2.61-.15 5.24-.44 7.84a68 68 0 0 1-1.32 7.74c-.58 2.54-1.31 5.07-2.17 7.54a69.531 69.531 0 0 1-6.8 14.12 69.838 69.838 0 0 1-4.54 6.4 71.002 71.002 0 0 1-5.23 5.86c-1.85 1.84-3.81 3.6-5.86 5.23a69.838 69.838 0 0 1-6.4 4.54 69.531 69.531 0 0 1-14.12 6.8c-2.47.86-5 1.59-7.54 2.17a68 68 0 0 1-7.74 1.32c-2.6.29-5.23.44-7.84.44-2.61 0-5.24-.15-7.84-.44a68 68 0 0 1-7.74-1.32c-2.54-.58-5.07-1.31-7.54-2.17a69.531 69.531 0 0 1-14.12-6.8 69.838 69.838 0 0 1-6.4-4.54 71.002 71.002 0 0 1-5.86-5.23c-1.84-1.85-3.6-3.81-5.23-5.86a69.838 69.838 0 0 1-4.54-6.4 69.531 69.531 0 0 1-6.8-14.12c-.86-2.47-1.59-5-2.17-7.54a68 68 0 0 1-1.32-7.74c-.29-2.6-.44-5.23-.44-7.84 0-2.61.15-5.24.44-7.84a68 68 0 0 1 1.32-7.74c.58-2.54 1.31-5.07 2.17-7.54a69.531 69.531 0 0 1 6.8-14.12c1.39-2.21 2.91-4.36 4.54-6.4 1.63-2.05 3.39-4.01 5.23-5.86 1.85-1.84 3.81-3.6 5.86-5.23 2.04-1.63 4.19-3.15 6.4-4.54a69.531 69.531 0 0 1 14.12-6.8c2.47-.86 5-1.59 7.54-2.17a68 68 0 0 1 7.74-1.32c2.6-.29 5.23-.44 7.84-.44 2.61 0 5.24.15 7.84.44a68 68 0 0 1 7.74 1.32c2.54.58 5.07 1.31 7.54 2.17a69.531 69.531 0 0 1 14.12 6.8c2.21 1.39 4.36 2.91 6.4 4.54 2.05 1.63 4.01 3.39 5.86 5.23 1.84 1.85 3.6 3.81 5.23 5.86 1.63 2.04 3.15 4.19 4.54 6.4a69.531 69.531 0 0 1 6.8 14.12c.86 2.47 1.59 5 2.17 7.54a68 68 0 0 1 1.32 7.74c.29 2.6.37 6.53.44 7.84.07 1.31.07-1.31 0 0"
          />
        </g>
        {activeNodes.has(Nodes.node2) && (
          <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
            <path
              fill="none"
              stroke="#f08c00"
              strokeLinecap="round"
              strokeWidth={4}
              d="M1259.237 570.436c98.05-152.45 196.1-304.9 262.7-408.46m-262.7 408.46c82.07-127.6 164.14-255.21 262.7-408.46m0 0c65.61 48.75 131.23 97.49 223.47 166.02m-223.47-166.02c60.9 45.24 121.79 90.48 223.47 166.02m0 0c81.68 76.83 163.35 153.66 210.06 197.61m-210.06-197.61c42.45 39.94 84.91 79.87 210.06 197.61m0 0c32.95 104.28 65.89 208.57 121.1 383.33m-121.1-383.33c33.86 107.16 67.71 214.33 121.1 383.33m0 0c-130.45 84.95-260.91 169.89-506.16 329.58m506.16-329.58c-133.3 86.8-266.61 173.6-506.16 329.58"
            />
          </g>
        )}

        <g clipPath="url(#YpiqB3JcT1SUkYklMKY8J)">
          <text
            y={42.153}
            fill="#f9fafb"
            dominantBaseline="alphabetic"
            fontSize={38.993}
            style={{
              whiteSpace: "pre",
            }}
            transform="translate(1030.045 1049.655)"
          >
            {`${time.hours}:${time.minutes}`}
          </text>
        </g>
      </svg>
    </div>
  );
}
export default Hermes;
