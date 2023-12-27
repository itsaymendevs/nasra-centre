'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditConditionModal } from '@/slices/SecModalSlice';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function EditPortal({ conditions }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { editConditionModal, editConditionId } = useSelector(
    (state) => state.SecModalSlice
  );

  // 2: formData state
  const initialState = {
    id: '',
    title: '',
    titleAr: '',
    content: '',
    contentAr: '',
  };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: get the item from id
  const condition = conditions.find((item) => item.id == editConditionId);

  // 2: set item to state
  useEffect(() => {
    if (condition) {
      setFormData((state) => ({
        ...state,
        id: condition.id,
        title: condition.title,
        titleAr: condition.titleAr,
        content: condition.content,
        contentAr: condition.contentAr,
      }));
    } // end if
  }, [editConditionId]);

  // 3: handle input change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }; // end function

  // 4: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    document.querySelectorAll('.modal button[type="submit"]')[0].innerText =
      'Loading ..';

    const response = await fetch(`${url}/api/delivery/conditions/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });

    // 4.2: hot reload + dispatch
    router.refresh();
    dispatch(toggleEditConditionModal({ status: false }));
  };

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {editConditionModal && (
        <GlobalPortal>
          {/* modal */}
          <form
            onSubmit={handleSubmit}
            className="modal fade show"
            role="dialog"
            tabIndex="-1"
            aria-modal="true"
            style={{
              display: 'block',
              paddingRight: '8px',
              backgroundColor: '#1111118a',
            }}
            id="edit-modal">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header modal--header">
                  <h4 className="modal-title fw-bold">Edit Condition</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() =>
                      dispatch(toggleEditConditionModal({ status: false }))
                    }
                    aria-label="Close"></button>
                </div>

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-end">
                    <div className="col-6 mb-4">
                      <input type="hidden" name="id" value={formData.id} />

                      <label className="form-label form--label">Title</label>
                      <input
                        name="title"
                        type="text"
                        required
                        className="form--input"
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Title Ar</label>
                      <input
                        name="titleAr"
                        type="text"
                        required
                        className="form--input"
                        value={formData.titleAr}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Content</label>
                      <textarea
                        className="form-control form--input form--textarea"
                        name="content"
                        required
                        value={formData.content}
                        onChange={handleInputChange}></textarea>
                    </div>

                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Content Ar
                      </label>
                      <textarea
                        className="form-control form--input form--textarea"
                        name="contentAr"
                        required
                        value={formData.contentAr}
                        onChange={handleInputChange}></textarea>
                    </div>
                  </div>
                </div>
                {/* end body */}

                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() =>
                      dispatch(toggleEditConditionModal({ status: false }))
                    }>
                    Close
                  </button>
                  <button
                    className="btn btn--theme btn--sm px-5 rounded-1"
                    type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* end modal */}
        </GlobalPortal>
      )}
    </>
  );
} // end function
