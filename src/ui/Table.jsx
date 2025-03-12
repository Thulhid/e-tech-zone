import { createContext } from 'react';

const TableContext = createContext();
function Table({ children }) {
  return (
    <TableContext.Provider value={{}}>
      <div
        role="table"
        className="overflow-hidden rounded-lg border border-slate-300"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  return (
    <div>
      <header
        role="row"
        className="grid grid-cols-[1.8fr_5fr_5fr_5fr_6fr_1fr] grid-rows-1 items-center text-xs font-medium text-slate-700 uppercase md:h-10 md:text-base"
      >
        {children}
      </header>
    </div>
  );
}

function Body({ data, render }) {
  console.log(data);
  return <div>{data?.map(render)}</div>;
}

function Row({ children }) {
  return (
    <div className="mb-3 grid grid-cols-[1.8fr_5fr_5fr_5fr_6fr_1fr] grid-rows-1 items-start border-t border-t-slate-300 pt-2 text-slate-700 uppercase">
      {children}
    </div>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
export default Table;
