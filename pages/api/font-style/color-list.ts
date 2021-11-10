// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = [string]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(['hello'])
}

// <div className={inputContainer}>
// <span>font color: </span>
// <input type="radio" name="choose-font-color" value="#d32f2f" onChange={handleFontColor}/>
// <label htmlFor="red">red</label>
// <input type="radio" name="choose-font-color" value="#1976d2" onChange={handleFontColor}/>
// <label htmlFor="blue">blue</label>
// <input type="radio" name="choose-font-color" value="#2e7d32" onChange={handleFontColor}/>
// <label htmlFor="green">green</label>
// <input type="radio" name="choose-font-color" value="#9c27b0" onChange={handleFontColor}/>
// <label htmlFor="purple">purple</label>
// </div>