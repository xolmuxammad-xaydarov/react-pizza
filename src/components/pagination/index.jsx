import ReactPaginate from 'react-paginate'
import styles from './Pag.module.scss'

const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root_pag}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
