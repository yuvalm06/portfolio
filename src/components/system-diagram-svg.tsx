"use client"

const NODE_H = 26
const RX = 4

function Node({
  cx, cy, label, sub, w = 92, highlight = false,
}: {
  cx: number; cy: number; label: string; sub?: string
  w?: number; highlight?: boolean
}) {
  return (
    <g>
      <rect
        x={cx - w / 2} y={cy - NODE_H / 2}
        width={w} height={NODE_H} rx={RX}
        fill="currentColor"
        fillOpacity={highlight ? 0.07 : 0.03}
        stroke="currentColor"
        strokeOpacity={highlight ? 0.32 : 0.2}
        strokeWidth={0.75}
      />
      {sub && (
        <text
          x={cx} y={cy - 4}
          textAnchor="middle" fontSize={6} fontFamily="monospace"
          fill="currentColor" fillOpacity={0.28}
        >
          {sub}
        </text>
      )}
      <text
        x={cx} y={sub ? cy + 6 : cy + 1}
        textAnchor="middle" dominantBaseline="middle"
        fontSize={9} fontFamily="monospace"
        fill="currentColor" fillOpacity={highlight ? 0.7 : 0.5}
      >
        {label}
      </text>
    </g>
  )
}

const L = {
  stroke: "currentColor" as const,
  strokeWidth: 0.75,
  strokeOpacity: 0.2,
}

export function SystemDiagramSVG() {
  return (
    <svg viewBox="0 0 400 290" fill="none" className="w-full h-auto">
      <defs>
        {/* Arrowhead */}
        <marker
          id="sdarr" viewBox="0 0 6 6" refX="5" refY="3"
          markerWidth="3.5" markerHeight="3.5" orient="auto"
        >
          <path d="M0 0 L6 3 L0 6 z" fill="currentColor" fillOpacity={0.2} />
        </marker>

        {/* Named paths for animateMotion only */}
        <path id="sdp1" d="M200,41  L200,87" />
        <path id="sdp2" d="M200,113 L200,143 L76,143  L76,165"  />
        <path id="sdp3" d="M200,113 L200,165" />
        <path id="sdp4" d="M200,113 L200,143 L324,143 L324,165" />
        <path id="sdp5" d="M324,191 L324,239" />
      </defs>

      {/* ── Connections ── */}
      <line x1={200} y1={41}  x2={200} y2={87}  {...L} markerEnd="url(#sdarr)" />
      <line x1={200} y1={113} x2={200} y2={143} {...L} />
      <line x1={76}  y1={143} x2={324} y2={143} {...L} />
      <line x1={76}  y1={143} x2={76}  y2={165} {...L} markerEnd="url(#sdarr)" />
      <line x1={200} y1={143} x2={200} y2={165} {...L} markerEnd="url(#sdarr)" />
      <line x1={324} y1={143} x2={324} y2={165} {...L} markerEnd="url(#sdarr)" />
      <line x1={324} y1={191} x2={324} y2={239} {...L} markerEnd="url(#sdarr)" />

      {/* Junction dots on the horizontal bus */}
      <circle cx={200} cy={143} r={2}   fill="currentColor" fillOpacity={0.2}  />
      <circle cx={76}  cy={143} r={1.5} fill="currentColor" fillOpacity={0.15} />
      <circle cx={324} cy={143} r={1.5} fill="currentColor" fillOpacity={0.15} />

      {/* ── Animated data-flow dots ── */}
      <circle r={2} fill="currentColor" fillOpacity={0.5}>
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s">
          <mpath href="#sdp1" />
        </animateMotion>
      </circle>
      <circle r={1.8} fill="currentColor" fillOpacity={0.4}>
        <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.3s">
          <mpath href="#sdp2" />
        </animateMotion>
      </circle>
      <circle r={1.8} fill="currentColor" fillOpacity={0.4}>
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.9s">
          <mpath href="#sdp3" />
        </animateMotion>
      </circle>
      <circle r={1.8} fill="currentColor" fillOpacity={0.4}>
        <animateMotion dur="3.0s" repeatCount="indefinite" begin="0.2s">
          <mpath href="#sdp4" />
        </animateMotion>
      </circle>
      <circle r={1.8} fill="currentColor" fillOpacity={0.32}>
        <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.2s">
          <mpath href="#sdp5" />
        </animateMotion>
      </circle>

      {/* ── Nodes (rendered above connections) ── */}
      <Node cx={200} cy={28}  label="client"      sub="USER" />
      <Node cx={200} cy={100} label="api-gateway"  sub="GW"  w={114} highlight />
      <Node cx={76}  cy={178} label="auth"         sub="SVC" />
      <Node cx={200} cy={178} label="compute"      sub="SVC" highlight />
      <Node cx={324} cy={178} label="cache"        sub="SVC" />
      <Node cx={324} cy={252} label="store"        sub="DB"  />
    </svg>
  )
}
