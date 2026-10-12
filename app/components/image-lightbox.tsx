'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type LightboxImageProps = {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  contain?: boolean
  label?: string
}

export function ImageLightbox({
  src,
  alt,
  className = '',
  sizes = '(max-width: 900px) 100vw, 80vw',
  priority = false,
  contain = false,
  label = '点击查看大图',
}: LightboxImageProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.body.classList.add('lightbox-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <button className={`lightbox-trigger ${className}`} type="button" onClick={() => setOpen(true)} aria-label={`${label}：${alt}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={contain ? 'media-contain' : 'media-cover'} />
        <span className="zoom-label">{label} ↗</span>
      </button>
      {open ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button className="lightbox-close" type="button" onClick={() => setOpen(false)} aria-label="关闭大图">关闭 ×</button>
          <div className="lightbox-stage" onClick={(event) => event.stopPropagation()}>
            <Image src={src} alt={alt} fill sizes="100vw" className="media-contain" priority />
          </div>
        </div>
      ) : null}
    </>
  )
}
