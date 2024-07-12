import '../styles/footer.css'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>Designed and Developed by Simon Ehrlich</p>
      <p>Copyright &copy; {year} Se</p>
    </div>
  );
}
