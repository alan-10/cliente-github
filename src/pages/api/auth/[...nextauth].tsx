import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth  from 'next-auth';
import Providers from 'next-auth/providers';


const options = {
  providers: [
    Providers.GitHub({
      clientId:process.env.GITHUB_ID,
      clientSecret:process.env.GITHUB_SECRET
    })
  ]
}

export default (request: NextApiRequest, response: NextApiResponse) => NextAuth(request, response, options)