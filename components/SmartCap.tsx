export function SmartCap() {
  return (
    <section className="cap" id="smart-cap">
      <div className="wrap split reveal">
        <figure className="diagram">
          <CapDiagram />
        </figure>
        <div>
          <div className="eyebrow">Flagship innovation</div>
          <h2>The Smart Cap data engine</h2>
          <p className="lede">
            Large language models scale on historical text. Embodied AI and robotics lack high-fidelity human
            demonstration data. Our Egocentric Spatial-Kinematic Smart Cap captures it from the wearer&apos;s own point of
            view.
          </p>
          <div className="pp">
            <p>
              <b>Pipeline.</b> Multi-modal telemetry passes through Extended Kalman Filtering and matrix transformation to
              produce robot-executable VLA tokens. Work in progress.
            </p>
            <p>
              <b>Commercialization.</b> Protected by joint international patents, including U.S. filings, and licensed to
              AI and robotics organizations worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CapDiagram() {
  const line = { stroke: '#C0C7D1', strokeOpacity: 0.5 }
  return (
    <svg viewBox="0 0 640 520" role="img" aria-label="Smart Cap sensor layout: crown IMU, brim RGB-D array, inward IR eye tracking, forehead sEMG">
      <defs>
        <linearGradient id="capg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a4254" />
          <stop offset="1" stopColor="#1b2030" />
        </linearGradient>
      </defs>
      <path d="M150 300 C150 170 250 110 340 110 C440 110 500 180 505 290 Z" fill="url(#capg)" {...line} strokeWidth={1.5} />
      <path d="M150 300 L505 290 L505 304 L150 316 Z" fill="#2a3142" {...line} />
      <path d="M480 292 C540 292 600 304 620 322 C600 334 540 330 470 318 Z" fill="#232a3a" {...line} strokeWidth={1.5} />
      <path d="M250 125 C300 160 330 230 335 300" fill="none" stroke="#C0C7D1" strokeOpacity={0.18} />
      <path d="M420 125 C420 170 430 230 440 295" fill="none" stroke="#C0C7D1" strokeOpacity={0.18} />
      <g fill="#D49A3E">
        <circle cx="340" cy="112" r="7" />
        <circle cx="560" cy="312" r="7" />
        <circle cx="520" cy="330" r="6" />
        <circle cx="470" cy="290" r="6" />
      </g>
      <g stroke="#D49A3E" strokeWidth={1.2} fill="none">
        <path d="M340 105 L340 50 L200 50" />
        <path d="M560 312 L600 250 L620 250" />
        <path d="M520 330 L520 410 L560 410" />
        <path d="M470 290 L400 400 L250 400" />
      </g>
      <text x="40" y="40" className="k">CROWN · 9-DOF IMU</text>
      <text x="40" y="60">Head motion · 200 Hz</text>
      <text x="440" y="222" className="k">BRIM · RGB-D</text>
      <text x="440" y="242">Stereo depth · 60 FPS</text>
      <text x="440" y="440" className="k">INWARD · IR ARRAY</text>
      <text x="440" y="460">Eye tracking &amp; gaze</text>
      <text x="40" y="420" className="k">FOREHEAD · sEMG</text>
      <text x="40" y="440">Pre-action muscle activation</text>
    </svg>
  )
}
