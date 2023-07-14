import { ComponentPropsWithoutRef, MouseEventHandler } from 'react'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type Column = {
  key: string
  title: string
  isSortable?: boolean
}

const dataAttributes = {
  sortable: 'data-sortable',
  name: 'data-name',
} as const

type TableHeaderProps = ComponentPropsWithoutRef<'thead'> & {
  columns: Column[]
  onSort: (sort: Sort) => void
  sort: Sort
}

export const TableHeader = ({ columns, onSort, sort }: TableHeaderProps) => {
  const handleSort: MouseEventHandler<HTMLTableHeaderCellElement> = e => {
    const isSortable = e.currentTarget.getAttribute(dataAttributes.sortable)
    const key = e.currentTarget.getAttribute(dataAttributes.name)
    if (key === null) throw new Error('no data-name found')

    if (!isSortable) return
    if (sort && sort.key === key) {
      onSort({
        key,
        direction: sort.direction === 'asc' ? 'desc' : 'asc',
      })
    } else {
      onSort({
        key,
        direction: 'asc',
      })
    }
  }

  return (
    <thead>
      <tr>
        {columns.map(column => {
          const showSort = column.isSortable && sort && sort.key === column.key

          return (
            <th
              {...{
                [dataAttributes.sortable]: column.isSortable,
                [dataAttributes.name]: column.key,
              }}
              data-sortable={column.isSortable}
              data-name={column.key}
              key={column.key}
              onClick={handleSort}
            >
              {column.title} {showSort && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
            </th>
          )
        })}
        <th></th>
      </tr>
    </thead>
  )
}
