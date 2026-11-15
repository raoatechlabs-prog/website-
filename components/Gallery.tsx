import Image from 'next/image'
import type { ReactNode } from 'react'
import type { GalleryItem } from '@/content/site'

type Props = { id: string; eyebrow: string; title: string; intro: string; items: GalleryItem[]; children?: ReactNode }

/** A section of captioned event photos. */
export function Gallery({ id, eyebrow, title, intro, items, children }: Props) {
  return (
    <section className="gallery" id={id}>
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        <p className="intro">{intro}</p>
        {children}
        <div className="gallery-grid">
          {items.map((item) => (
            <figure className="g-card" key={item.img}>
              <div className="g-img">
                <Image
                  src={`/images/gallery/${item.img}.jpg`}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={item.height > item.width ? 'tall' : undefined}
                />
              </div>
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
