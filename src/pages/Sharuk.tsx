import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

type Balloon = {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    popped: boolean;
    value: string;
};

const needleSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <defs>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f5f5f5"/>
      <stop offset="40%" stop-color="#cfcfcf"/>
      <stop offset="60%" stop-color="#9e9e9e"/>
      <stop offset="100%" stop-color="#eaeaea"/>
    </linearGradient>
  </defs>

  <line x1="6" y1="42" x2="38" y2="8"
        stroke="url(#metal)"
        stroke-width="3"
        stroke-linecap="round"/>

  <circle cx="38" cy="8" r="1.5" fill="#dddddd"/>

  <ellipse cx="10" cy="38" rx="3" ry="1.8"
           fill="none"
           stroke="#cfcfcf"
           stroke-width="1.4"/>
</svg>
`;

const needleCursor = `url("data:image/svg+xml,${encodeURIComponent(needleSVG)}") 6 6, pointer`;

const startPoint = { x: 600, y: 960 };

const colors = ["#ff4d4f", "#40a9ff", "#73d13d", "#ffa940", "#9254de"];

const width = 120;
const height = width * 1.3;

const widthMid = 220;
const heightMid = widthMid * 1.3;

const widthBig = 180;
const heightBig = widthBig * 1.3;

const balloonList = [
    {
        id: 1,
        x: 20,
        y: 430,
        width: widthMid,
        height: heightMid,
        color: colors[4],
        popped: false,
        value: "Who is a birthday boy/girl today?",
    },
    {
        id: 2,
        x: 100,
        y: 160,
        width: widthMid,
        height: heightMid,
        color: colors[0],
        popped: false,
        value: "Happy belated birthday!",
    },
    {
        id: 3,
        x: 230,
        y: 620,
        width,
        height,
        color: colors[3],
        popped: false,
        value: "Enjoy the ride!",
    },
    {
        id: 4,
        x: 290,
        y: 340,
        width: widthMid,
        height: heightMid,
        color: colors[1],
        popped: false,
        value: "Did you make a wish list?",
    },
    {
        id: 5,
        x: 430,
        y: 110,
        width: widthBig,
        height: heightBig,
        color: colors[3],
        popped: false,
        value: "What present did you like the most?",
    },
    {
        id: 6,
        x: 454,
        y: 610,
        width: width,
        height: height,
        color: colors[2],
        popped: false,
        value: "It’s your day to shine!",
    },
    {
        id: 7,
        x: 540,
        y: 340,
        width: widthBig,
        height: heightBig,
        color: colors[0],
        popped: false,
        value: "Did you throw a birthday party?",
    },

    {
        id: 8,
        x: 650,
        y: 120,
        width: widthBig,
        height: heightBig,
        color: colors[1],
        popped: false,
        value: "Did you make a wish and blow out the candles?",
    },
    {
        id: 9,
        x: 720,
        y: 360,
        width: 180,
        height: 180 * 1.3,
        color: colors[2],
        popped: false,
        value: "Cheers on your birthday!",
    },
    {
        id: 10,
        x: 950,
        y: 200,
        width: widthMid,
        height: heightMid,
        color: colors[3],
        popped: false,
        value: "Who is a birthday boy/girl today?",
    },
    {
        id: 11,
        x: 850,
        y: 510,
        width: 200,
        height: 200 * 1.3,
        color: colors[1],
        popped: false,
        value: "Who is a birthday boy/girl today?",
    },
];

export function Sharuk() {
    const [balloons, setBalloons] = useState<Balloon[]>(balloonList);

    const popBalloon = (id: number) => {
        setBalloons((prev) =>
            prev.map((b) => (b.id === id ? { ...b, popped: true } : b)),
        );
    };

    return (
        <div
            style={{
                backgroundColor: "#1c4d12",
                height: "100vh",
                position: 'relative',
            }}
        >
            <Stack
                flexDirection={"row"}
                gap={"180px"}
                alignItems={"center"}
                justifyContent={"center"}

                sx={{
                    position: "absolute",
                    top: "62px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "64px",
                        fontWeight: "bold",
                        color: "#dcd334",
                        textAlign: "center",
                        fontFamily: "Fantasy",
                    }}
                >
                    BIRTHDAY
                </Typography>
                <Typography
                    sx={{
                        fontSize: "64px",
                        fontWeight: "bold",
                        color: "#dcd334",
                        textAlign: "center",
                        fontFamily: "Fantasy",
                    }}
                >
                    BALLOONS
                </Typography>
            </Stack>

            <Box
                sx={{
                    position: "relative",
                    width: 1200,
                    margin: "0 auto",
                }}
            >
                {/* Strings */}
                <svg
                    width="1200"
                    height="100vh"
                    style={{ position: "absolute", top: 0, left: 0 }}
                >
                    {balloons.map(
                        (b) =>
                            !b.popped && (
                                <line
                                    key={b.id}
                                    x1={startPoint.x}
                                    y1={startPoint.y}
                                    x2={b.x + b.width / 2}
                                    y2={b.y + b.height}
                                    stroke={"#84a480"}
                                    strokeWidth="2"
                                />
                            ),
                    )}
                </svg>

                {/* Balloons */}
                {balloons.map((b) =>
                    b.popped ? (
                        <Typography
                            sx={{
                                position: "absolute",
                                left: b.x,
                                top: b.y + b.height / 2,
                                width: b.width,
                                fontSize: "26px",
                                fontWeight: "bold",
                                color: `${b.color}`,
                                lineHeight: "28px",
                                textAlign: "center",
                                zIndex: 1,
                            }}
                        >
                            {b.value}
                        </Typography>
                    ) : (
                        <Box
                            key={b.id}
                            onClick={() => popBalloon(b.id)}
                            sx={{
                                position: "absolute",
                                left: b.x,
                                top: b.y,
                                width: b.width,
                                height: b.height,
                                borderRadius: "50%",
                                cursor: needleCursor,
                                zIndex: 2,

                                background: `radial-gradient(circle at 30% 30%, white 5%, ${b.color} 40%, #00000033 100%)`,

                                boxShadow: `
                  inset -10px -20px 30px rgba(0,0,0,0.3),
                  inset 10px 10px 20px rgba(255,255,255,0.6),
                  0 10px 20px rgba(0,0,0,0.25)
                `,

                                transition: "transform 0.2s",

                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        />
                    ),
                )}

                {/* Knot */}
                <Box
                    sx={{
                        position: "absolute",
                        left: startPoint.x - 5,
                        top: startPoint.y - 5,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#222",
                    }}
                />
            </Box>
        </div>
    );
}
