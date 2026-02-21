import clsx from "clsx";

import styles from "./Pagination.module.scss";
import { getPages } from "./lib/getPages";
import { PaginationItem } from "./paginationItem/PaginationItem";
import { Select } from "components";
import { pageSizeOptions } from "./model/pageSizeOptions";
import { ArrowIosBack, ArrowIosForward } from "icons";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: string;
  onPageSizeChange: (value: string) => void;
  className?: string;
};

export const Pagination: React.FC<Props> = (props) => {
  const {
    onPageSizeChange,
    onPageChange,
    pageSize,
    totalPages,
    currentPage,
    className,
  } = props;
  const pages = getPages(currentPage, totalPages);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <PaginationItem
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        ariaLabel="Previous page"
        tabIndex={currentPage === 1 ? -1 : 0}
      >
        <ArrowIosBack />
      </PaginationItem>
      {pages.map((page, i) => (
        <PaginationItem
          key={i}
          active={page === currentPage}
          onClick={() => typeof page === "number" && onPageChange(page)}
          ariaLabel={`Page: ${page}`}
          tabIndex={typeof page === "string" ? -1 : 0}
        >
          {page}
        </PaginationItem>
      ))}

      <PaginationItem
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        ariaLabel="Next page"
        tabIndex={currentPage === totalPages ? -1 : 0}
      >
        <ArrowIosForward />
      </PaginationItem>
      <div className={styles.show}>
        <p>Show</p>
        <Select
          options={pageSizeOptions}
          value={pageSize}
          onValueChange={onPageSizeChange}
          disabled={false}
          variant="text"
          width="75px"
        />
        <p>on page</p>
      </div>
    </div>
  );
};
