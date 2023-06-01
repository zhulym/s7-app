import React, { FC, useEffect, useMemo } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "theme";
import { getRandomColor } from 'utils/lines';
import { SET_TAGS } from 'store/slices/linesSlice';
import { IPoint, IRenderData, ITag } from 'model/app';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';

interface IProps {
  isDashboard?: boolean;
  isCustomLineColors?: boolean;
}

const LineChart: FC<IProps> = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const colors = tokens(theme.palette.mode);
  const { pointsAmount, tags, linesData } = useAppSelector((state) => state.lines);

  const headers = useMemo(() => {
    if (linesData?.length) {
      return linesData[0][0].split(',');
    }
  }, [linesData]);

  const checkedTags = useMemo(() => {
    const _checkedTags: string[] = [];
    for (const key in tags) {
      if (tags[key]) {
        _checkedTags.push(key);
      }
    }
    return _checkedTags;
  }, [tags]);

  const checkedIdx = useMemo(() => {
    const tagsIdx: number[] = [];
    checkedTags.forEach(tag => {
      const idx = (headers as string[]).indexOf(tag);
      tagsIdx.push(idx);
    });
    return tagsIdx;
  }, [checkedTags, headers]);

  const getRenderData = useMemo(() => {
    const renderData: IRenderData[] = [];
    let points: IPoint[] = [];
    if (linesData?.length) {
      checkedIdx.forEach(async (idx) => {
        for (const row of linesData) {
          const pointsData = row[0].split(',');
          points.push({
            x: pointsData[0],
            y: +pointsData[idx],
          });
        }
        renderData.push({
          id: headers ? headers[idx] : '',
          color: getRandomColor(),
          data: points.slice(1, pointsAmount),
        });

        points = [];
      });
      return renderData;
    }
  }, [checkedIdx, headers, linesData, pointsAmount]);

  useEffect(() => {
    if (linesData?.length && headers) {
      const tagsData: ITag = {};
      for (const item of headers.slice(1)) {
        tagsData[item] = false;
      }
      dispatch(SET_TAGS(tagsData));
    }
  }, [dispatch, linesData, headers]);

  return (
    getRenderData ? (
      <ResponsiveLine
        data={getRenderData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
        }}
        colors={isDashboard ? { datum: "color" } : { scheme: "set1" }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Time",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickValues: 5,
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Tags",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    ) : (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h2" fontWeight={700}>
          To build a graph upload a .csv file and choose tag!
        </Typography>
      </Box>
    )
  );
};

export default LineChart;
