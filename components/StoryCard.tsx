"use client";

import { forwardRef } from "react";
import type { ResultData } from "@/types";

type Props = {
  result: ResultData;
  siteUrl?: string;
};

const StoryCard = forwardRef<HTMLDivElement, Props>(
  ({ result, siteUrl = "nomikai-shindan.vercel.app" }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          width: 1080,
          height: 1920,
          fontFamily:
            "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
          background: "linear-gradient(160deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 80px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG decoration circles */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: result.accentColor + "18",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: result.accentColor + "12",
            pointerEvents: "none",
          }}
        />

        {/* Top: title */}
        <div style={{ textAlign: "center", zIndex: 1 }}>
          <p
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.25em",
              margin: 0,
            }}
          >
            NOMIKAI SURVIVAL
          </p>
          <p
            style={{
              fontSize: 36,
              color: "rgba(255,255,255,0.7)",
              marginTop: 8,
              letterSpacing: "0.1em",
            }}
          >
            飲み会生存キャラ診断
          </p>
        </div>

        {/* Center: character */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
            flex: 1,
            justifyContent: "center",
            gap: 0,
          }}
        >
          {/* Character emoji big */}
          <div
            style={{
              fontSize: 280,
              lineHeight: 1,
              marginBottom: 40,
              filter: "drop-shadow(0 0 40px " + result.accentColor + "80)",
            }}
          >
            {result.emoji}
          </div>

          <p
            style={{
              fontSize: 32,
              color: result.accentColor,
              letterSpacing: "0.15em",
              margin: 0,
            }}
          >
            あなたは
          </p>
          <h2
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.2,
              marginTop: 16,
              marginBottom: 24,
              letterSpacing: "0.05em",
            }}
          >
            {result.name}
          </h2>
          <p
            style={{
              fontSize: 38,
              color: result.accentColor,
              textAlign: "center",
              fontStyle: "italic",
              lineHeight: 1.5,
              maxWidth: 860,
            }}
          >
            {result.catchcopy}
          </p>
        </div>

        {/* Short description */}
        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            borderRadius: 24,
            padding: "48px 60px",
            marginBottom: 40,
            zIndex: 1,
            width: "100%",
          }}
        >
          {result.shortDescription.split("\n").map((line, i) => (
            <p
              key={i}
              style={{
                fontSize: 36,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7,
                margin: 0,
                textAlign: "center",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Bottom: hashtag + URL */}
        <div style={{ textAlign: "center", zIndex: 1 }}>
          <p
            style={{
              fontSize: 32,
              color: result.accentColor,
              marginBottom: 12,
              letterSpacing: "0.05em",
            }}
          >
            #飲み会生存キャラ診断
          </p>
          <p
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
            }}
          >
            {siteUrl}
          </p>
        </div>
      </div>
    );
  }
);

StoryCard.displayName = "StoryCard";
export default StoryCard;
