import "./page-footer.css";

function PageFooter() {
  const year = new Date().getFullYear();
  return <footer className="page-footer">© Sneh Mehta, {year}</footer>;
}
export default PageFooter;
