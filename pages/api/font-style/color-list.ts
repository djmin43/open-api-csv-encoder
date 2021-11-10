// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Color {
  id: number,
  color: string,
  value: string,
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Color[]>
) {
  res.status(200).json(colorList)
}

export const colorList = [
  {
    id: 1,
    color: 'red',
    value: '#d32f2f'
  },
  {
    id: 2,
    color: 'blue',
    value: '#1976d2'
  },
  {
    id: 3,
    color: 'green',
    value: '#2e7d32'
  },
  {
    id: 4,
    color: 'purple',
    value: '#9c27b0'
  },
]
