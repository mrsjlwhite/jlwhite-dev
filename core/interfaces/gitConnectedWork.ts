type IGitConnectedWork =   {
  name: string
  location: string
  description: string
  position: string
  url: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[]
  isCurrentRole: false
  start: { year: number, month: number }
  end: { year: number, month: number }
  company: string
  website: string
}

export default IGitConnectedWork;