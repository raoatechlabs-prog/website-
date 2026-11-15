import { Suspense } from 'react'
import { site } from '@/content/site'
import { EnquiryForm } from './EnquiryForm'

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap engage">
        <div className="engage-info">
          <div className="eyebrow">Engage our R&amp;D &amp; venture team</div>
          <h2>Request a Lab Consultation, Enterprise Service, or Partnership</h2>
          <p>
            Whether you need enterprise software testing, custom hardware/AI prototyping, ISO compliance consulting,
            corporate training, or Venture Studio incubation, our laboratory directors are ready to collaborate.
          </p>
          <dl className="addr">
            <div>
              <dt>Facility location</dt>
              <dd>Sabo–Yaba Innovation District ({site.address})</dd>
            </div>
            <div>
              <dt>Direct email</dt>
              <dd>
                <a className="mail" href={`mailto:${site.publicEmail}`}>
                  {site.publicEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt>Phone / WhatsApp consultation</dt>
              <dd>
                <a className="tel" href={`tel:${site.phone.tel}`}>
                  {site.phone.display}
                </a>{' '}
                ·{' '}
                <a className="tel" href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt>Official portals</dt>
              <dd>
                {site.portals.map((p, i) => (
                  <span key={p}>
                    {i > 0 && ' | '}
                    <a className="mail" href={`https://${p}`} target="_blank" rel="noopener noreferrer">
                      {p}
                    </a>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <p className="proximity">
            Proximity advantage: ~10 mins from Yaba College of Technology (YABATECH) &amp; ~15 mins from University of
            Lagos (UNILAG).
          </p>
        </div>
        <Suspense>
          <EnquiryForm />
        </Suspense>
      </div>
    </section>
  )
}
