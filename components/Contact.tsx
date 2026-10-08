import { Suspense } from 'react'
import { site } from '@/content/site'
import { EnquiryForm } from './EnquiryForm'

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap split">
        <div>
          <div className="eyebrow">Executive office</div>
          <h2>Schedule a briefing or tour the facility</h2>
          <div className="addr">
            <div>
              <small>Address</small>
              <p>
                {site.legalName}
                <br />
                {site.address}
              </p>
            </div>
            <div>
              <small>Email</small>
              <p>
                <a className="mail" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <small>Phone</small>
              <p>
                <a className="tel" href={`tel:${site.phone.tel}`}>
                  {site.phone.display}
                </a>
              </p>
            </div>
          </div>
        </div>
        <Suspense>
          <EnquiryForm />
        </Suspense>
      </div>
    </section>
  )
}
