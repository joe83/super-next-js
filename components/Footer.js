const Footer = () => (
  <footer>
    <p>Designed and built with <span className="text-error">♥</span> by <a href="https://mkhuda.com" target="_blank">Muhammad K. Huda</a>.
      <br />
    Fork this repo on <a href="https://github.com/mkhuda/super-next-js" target="_blank">Github</a>.</p>
    <style jsx>{`
      footer {
        color: #acb3c2;
        padding: .5rem .5rem 1.5rem 0rem;
      }
      span.text-error {
        color: #e85600;
      }
      a {
        color: #667189;
      }
    `}</style>
  </footer>
)

export default Footer
