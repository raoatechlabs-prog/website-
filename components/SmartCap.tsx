import Image from 'next/image'

export function SmartCap() {
  return (
    <section className="cap" id="smart-cap">
      <div className="wrap split reveal">
        <figure className="diagram">
          <Image
            src="/images/smart-cap.jpg"
            alt="Smart Cap hardware and sensor architecture: a Raoatech cap with dual RGB and depth cameras on the brim, a 9-DOF inertial measurement unit on the crown, and optional eye-tracking or EEG/EMG sensors in the headband"
            width={1282}
            height={708}
            sizes="(max-width: 820px) 100vw, 55vw"
          />
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
          </div>
        </div>
      </div>
    </section>
  )
}
