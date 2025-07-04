/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import type { CategoryList } from '../../types'
import type { MenuProps } from 'antd'

import { TableActionButton } from '@/components/Common'
import EmptyContentWithLoading from '@/components/Common/EmptyContentTableLoading'
import { ButtonWrapper, SpaceWrapper, TableWrapper } from '@/components/Wrapper'

import { useGetRequestHandler } from '@/hook/requestHandler'

import CategoryManageModal from '../modal/CategoryManageModal'

const CategoryCard = (): JSX.Element => {
  // fetch all categories
  const { fetchData, data, isLoading } = useGetRequestHandler<CategoryList[]>()

  const [openModal, setOpenModal] = React.useState(false)
  const [selectedId, setSelectedId] = React.useState('')

  const fetchCategories = async (): Promise<void> => {
    fetchData('/api/categories-list-full')
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const getMoreMenus = (record: CategoryList): MenuProps['items'] => [
    {
      key: 'edit',
      title: 'Edit',
      onClick: () => {
        setSelectedId(record.id)
        setOpenModal(true)
      },
    },
    {
      key: 'delete',
      title: 'Delete',
      onClick: () => {
        // Handle delete action
      },
    },
  ]
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Unit Type',
      dataIndex: 'unitType',
    },
    {
      title: 'Units',
      dataIndex: 'units',
    },
    {
      title: '',
      key: 'action',
      className: 'text-right',
      render: (record: CategoryList) => <TableActionButton items={getMoreMenus(record)} />,
    },
  ]

  const ACTION_COMP = (
    <SpaceWrapper className="w-100 justify-content-between">
      <h4 className="ant-card-head-title">Categories</h4>
      <ButtonWrapper type="primary" onClick={() => setOpenModal(true)}>
        New
      </ButtonWrapper>
    </SpaceWrapper>
  )

  return (
    <>
      <div id="categories" className="mb-3">
        <TableWrapper
          title={() => ACTION_COMP}
          columns={columns}
          dataSource={data || []}
          locale={{
            emptyText: <EmptyContentWithLoading isLoading={isLoading} columns={[30, 30, 30, 10]} />,
          }}
        />
      </div>
      {openModal && <CategoryManageModal openModal={openModal} setOpenModal={setOpenModal} selectedId={selectedId} />}
    </>
  )
}

export default CategoryCard
