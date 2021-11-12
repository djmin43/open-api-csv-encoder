// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface FontSize {
  id: number,
  size: string,
  value: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FontSize[]>
) {
  res.status(200).json(fontSizeList)
}

export const fontSizeList = [
  {
    id: 1,
    size: 'extra small',
    value: '8px'
  },
  {
    id: 2,
    size: 'small',
    value: '16px'
  },
  {
    id: 3,
    size: 'medium',
    value: '32px'
  },
  {
    id: 4,
    size: 'large',
    value: '64px'
  },
  {
    id: 5,
    size: 'extra large',
    value: '128px'
  },
]
