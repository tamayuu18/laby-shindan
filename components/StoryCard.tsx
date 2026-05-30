"use client";

import { forwardRef } from "react";
import type { ResultData } from "@/types";

const characterImage: Record<string, string> = {
  "champagne-dog": "/characters/champagne-dog.png",
  tanuki: "/characters/tanuki.png",
  cat: "/characters/cat.png",
  rabbit: "/characters/rabbit.png",
  hamster: "/characters/hamster.png",
  jellyfish: "/characters/jellyfish.png",
};

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
          background: "linear-gradient(160deg, #f0ebff 0%, #faf5ff 50%, #fff 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "100px 90px 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG blobs */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: result.cardAccent + "22",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: result.cardAccent + "15",
            pointerEvents: "none",
          }}
        />

        {/* Top: logo */}
        <div style={{ textAlign: "center", zIndex: 1 }}>
          <p
            style={{
              fontSize: 28,
              color: result.cardAccent,
              letterSpacing: "0.35em",
              margin: 0,
              fontWeight: 700,
            }}
          >
            NOMIKAI SURVIVAL
          </p>
          <p
            style={{
              fontSize: 40,
              color: "#2d1b69",
              marginTop: 10,
              fontWeight: 900,
              letterSpacing: "0.08em",
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
          }}
        >
          {/* Character image */}
          <div
            style={{
              width: 520,
              height: 520,
              borderRadius: 80,
              overflow: "hidden",
              marginBottom: 60,
              boxShadow: `0 20px 80px ${result.cardAccent}50`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={characterImage[result.id] ?? ""}
              alt={result.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <p
            style={{
              fontSize: 36,
              color: result.cardAccent,
              letterSpacing: "0.2em",
              margin: 0,
              fontWeight: 700,
            }}
          >
            あなたは
          </p>
          <h2
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#2d1b69",
              textAlign: "center",
              lineHeight: 1.2,
              marginTop: 20,
              marginBottom: 28,
              letterSpacing: "0.04em",
            }}
          >
            {result.name}
          </h2>
          <p
            style={{
              fontSize: 42,
              color: result.cardAccent,
              textAlign: "center",
              fontWeight: 700,
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
            background: "rgba(255,255,255,0.75)",
            borderRadius: 32,
            padding: "52px 64px",
            marginBottom: 50,
            zIndex: 1,
            width: "100%",
            border: `2px solid ${result.cardAccent}40`,
          }}
        >
          {result.shortDescription.split("\n").map((line, i) => (
            <p
              key={i}
              style={{
                fontSize: 38,
                color: "#4a3880",
                lineHeight: 1.7,
                margin: 0,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ textAlign: "center", zIndex: 1 }}>
          <p
            style={{
              fontSize: 34,
              color: result.cardAccent,
              marginBottom: 14,
              letterSpacing: "0.06em",
              fontWeight: 700,
            }}
          >
            #飲み会生存キャラ診断
          </p>
          <p
            style={{
              fontSize: 28,
              color: "#a78bfa",
              letterSpacing: "0.12em",
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
