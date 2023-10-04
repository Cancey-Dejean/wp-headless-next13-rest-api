export const baseUrl = "http://stone.local"
export const reqUrl = `${baseUrl}` + "/wp-json/wp/v2"
export const menuUrl = `${baseUrl}` + "/wp-json/menus/v1/menus"

export async function fetchPageComponent(reqUrl, componentPageSlug) {
  const req = await fetch(
    `${reqUrl}/pages?&_fields=acf&slug=${componentPageSlug}&fields&acf_format=standard`
  )

  const pages = await req.json()
  const page = pages[0].acf

  return page
}
