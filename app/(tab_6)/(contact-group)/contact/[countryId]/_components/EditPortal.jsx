'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditConditionModal } from '@/slices/SixthModalSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function EditPortal({ country, terms }) {
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
    (state) => state.SixthModalSlice
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
  const term = terms.find((item) => item.id == editConditionId);

  // 2: set item to state
  useEffect(() => {
    if (term) {
      setFormData((state) => ({
        ...state,
        id: term.id,
        title: term.title,
        titleAr: term.titleAr,
        content: term.content,
        contentAr: term.contentAr,
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

    const response = await fetch(
      `${url}/api/contact/${country.id}/terms/update`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(formData),
      }
    );

    // 4.2: hot reload + dispatch
    setFormData(initialState);
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
                      <label className="form-label form--label">Title</label>
                      <input
                        name="title"
                        className="form--input"
                        type="text"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Title Ar</label>
                      <input
                        name="titleAr"
                        className="form--input"
                        type="text"
                        required
                        value={formData.titleAr}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Content</label>
                      <textarea
                        name="content"
                        className="form-control form--input form--textarea"
                        required
                        value={formData.content}
                        onChange={handleInputChange}></textarea>
                    </div>

                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Content Ar
                      </label>
                      <textarea
                        name="contentAr"
                        className="form-control form--input form--textarea"
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
