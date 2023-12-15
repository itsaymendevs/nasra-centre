'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditParagraphModal } from '@/slices/SixthModalSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'next-client-cookies';

export default function EditPortal({ aboutParagraphs }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { editParagraphModal, editParagraphId } = useSelector(
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
  const paragraph = aboutParagraphs.find((item) => item.id == editParagraphId);

  // 2: set item to state
  useEffect(() => {
    if (paragraph) {
      setFormData((state) => ({
        ...state,
        id: paragraph.id,
        title: paragraph.title,
        titleAr: paragraph.titleAr,
        content: paragraph.content,
        contentAr: paragraph.contentAr,
      }));
    } // end if
  }, [editParagraphId]);

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
    const response = await fetch(`${url}/api/help/about/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    router.refresh();
    dispatch(toggleEditParagraphModal({ status: false }));
  };

  // ---------------------------------- page ----------------------------------

  return (
    <>
      {editParagraphModal && (
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
                  <h4 className="modal-title fw-bold">Edit Paragraph</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() =>
                      dispatch(toggleEditParagraphModal({ status: false }))
                    }
                    aria-label="Close"></button>
                </div>

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-center">
                    <div className="col-6 mb-4">
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
                      <label className="form-label form--label">
                        Title Ar
                        <br />
                      </label>
                      <input
                        name="titleAr"
                        type="text"
                        required
                        className="form--input w-100"
                        value={formData.titleAr}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Content</label>
                      <textarea
                        name="content"
                        className="form-control form--input form--textarea"
                        style={{ width: '95%' }}
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
                        style={{ width: '95%' }}
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
                      dispatch(toggleEditParagraphModal({ status: false }))
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
