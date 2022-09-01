import { Provider, RequestClient } from '@self.id/framework'

export const getServerSideProps = async (ctx) => {
  const client = new RequestClient({
    ceramic: 'testnet-clay',
    // Inject the cookie from the request headers to parse the viewerID
    cookie: ctx.req.headers.cookie,
  })
  if (client.viewerID != null) {
    // If the viewerID is set, fetch its profile
    await client.prefetch('basicProfile', client.viewerID)
  }
  return { props: { state: client.getState() } }
}

// Use the state prop injected by the server
export default function Home({ state }) {
  return (
    <Provider state={state}>
      <ShowViewerName />
    </Provider>
  )
}






{/*
DOCUMENTATION, LINKS, ETC
https://developers.ceramic.network/tools/self-id/framework/

*/} 
