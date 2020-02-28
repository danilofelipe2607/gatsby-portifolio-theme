import React from 'react'

import { Timeline, Event } from 'react-timeline-scribble'

export default function LinhaDoTempo({
  body,
  subtitle,
  intervalo,
  title,
  children,
}) {
  return (
    <>
      <Timeline>{children}</Timeline>
    </>
  )
}
