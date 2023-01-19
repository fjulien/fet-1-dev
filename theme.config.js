const YEAR = new Date().getFullYear()

export default {
  head: ({ meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: `voir l'article →`,
  postFooter: null,
  darkMode: true,
  navs: [],
  footer: (
    <p className="footer-detail">
      <span>
      <time>{YEAR}</time> 
      © FETTINGER Julien.
      </span>
      <a href="/feed.xml">RSS</a>
    </p>
  )
}
