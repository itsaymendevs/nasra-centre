'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import Select from 'react-select';

// ----------------------------------------------------------------------------------------------------

export default function NewForm({
  units,
  companies,
  mainCategories,
  subCategories,
  types,
  serial,
}) {
  // ::root
  const options = [];
  const optionsTwo = [];
  const optionsThree = [];

  const optionsCompanies = [];
  const optionsUnits = [];
  const optionsFixedWeight = [
    { value: 0.5, label: '0.5' },
    { value: 1.0, label: '1.0' },
    { value: 1.5, label: '1.5' },
  ];

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: formData state
  const initialState = {
    serial: serial,
    name: '',
    nameAr: '',
    buyPrice: '',
    sellPrice: '',
    offerPrice: '',
    desc: '',
    descAr: '',
    weightOption: 'byName',
    weight: '',
    unitId: null,
    units: '',
    quantityPerUnit: '',
    quantity: '',
    maxQuantityPerOrder: '',
    isHidden: false,
    isMainPage: false,
    image: '',
    firstExtraImage: '',
    secExtraImage: '',
    thirdExtraImage: '',
    companyId: null,
    mainCategoryId: null,
    subCategoryId: null,
    typeId: null,
  };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- options ----------------------------------

  mainCategories.map((item) =>
    options.push({ value: item.id, label: item.name })
  );

  units.map((item) => optionsUnits.push({ value: item.id, label: item.name }));

  companies.map((item) =>
    optionsCompanies.push({ value: item.id, label: item.name })
  );

  subCategories.map((subCategory) => {
    // 2.1: if there is mainCategory
    formData.mainCategoryId &&
      (formData.mainCategoryId
        ? subCategory.mainCategoryId == formData.mainCategoryId &&
          optionsTwo.push({ value: subCategory.id, label: subCategory.name })
        : optionsTwo.push({ value: subCategory.id, label: subCategory.name }));
  });

  types.map((type) => {
    // 2.1: if there is subCategory
    formData.subCategoryId &&
      (formData.subCategoryId
        ? type.subCategoryId == formData.subCategoryId &&
          optionsThree.push({ value: type.id, label: type.name })
        : optionsThree.push({ value: type.id, label: type.name }));
  });

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]:
        event.target.type == 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));

    console.log(formData);
  }; // end function

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
    // 4.1: insert new item
    const response = await fetch(`${url}/api/products/store`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });

    console.log(await response.json());
    // 4.2: hot reload + dispatch
    router.refresh();
  };

  // ---------------------------------- page ----------------------------------

  return (
    <form className="form--page mb-5" onSubmit={handleSubmit}>
      <div className="row g-0">
        {/* serial */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Serial</label>
          <input
            name="serial"
            className="form-control form--input"
            type="text"
            disabled
            required
            value={formData.serial}
            onChange={handleInputChange}
          />
        </div>

        {/* hide / main page checkboxes */}
        <div className="col-6 align-self-end mb-4">
          <div className="form-check mb-2">
            <input
              name="isHidden"
              className="form-check-input"
              type="checkbox"
              id="formCheck-3"
              checked={formData.isHidden == true}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-3">
              Hide Product
            </label>
          </div>
          <div className="form-check">
            <input
              name="isMainPage"
              className="form-check-input"
              type="checkbox"
              id="formCheck-2"
              checked={formData.isMainPage == true}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-2">
              Add to main page
            </label>
          </div>
        </div>

        {/* name */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name</label>
          <input
            name="name"
            className="form-control form--input"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name Ar</label>
          <input
            name="nameAr"
            className="form-control form--input"
            type="text"
            required
            value={formData.nameAr}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12 mb-5">
          <hr className="visually-hidden" />
        </div>

        {/* company */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Company</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="company"
            required
            options={optionsCompanies}
            value={
              formData.companyId
                ? optionsCompanies.find(
                    (option) => option.value == formData?.companyId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              setFormData((state) => ({
                ...state,
                companyId: selectedOption?.value,
              }))
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* main / sub / type  */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Main Category</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="mainCategory"
            required
            options={options}
            value={
              formData.mainCategoryId
                ? options.find(
                    (option) => option.value == formData?.mainCategoryId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              setFormData((state) => ({
                ...state,
                mainCategoryId: selectedOption?.value,
                subCategoryId: null,
                typeId: null,
              }))
            }
            placeholder={''}
            isClearable
          />
        </div>

        <div className="col-6 mb-4">
          <label className="form-label form--label">Sub Category</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="subCategory"
            required
            options={optionsTwo}
            value={
              formData.subCategoryId
                ? optionsTwo.find(
                    (option) => option.value == formData?.subCategoryId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              setFormData((state) => ({
                ...state,
                subCategoryId: selectedOption?.value,
                typeId: null,
              }))
            }
            placeholder={''}
            isClearable
          />
        </div>

        <div className="col-6 mb-4">
          <label className="form-label form--label">Inner Type</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="innerType"
            required
            options={optionsThree}
            value={
              formData.typeId
                ? optionsThree.find(
                    (option) => option.value == formData?.typeId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              setFormData((state) => ({
                ...state,
                typeId: selectedOption?.value,
              }))
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* -------------------------- */}

        {/* buy */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">Buy Price</label>
          <input
            name="buyPrice"
            className="form-control form--input"
            type="number"
            step={0.01}
            min={0}
            required
            value={formData.buyPrice}
            onChange={handleInputChange}
          />
        </div>

        {/* sell */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">Sell Price</label>
          <input
            name="sellPrice"
            className="form-control form--input"
            type="number"
            step={0.01}
            min={0}
            required
            value={formData.sellPrice}
            onChange={handleInputChange}
          />
        </div>

        {/* offer */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Offer Price<small className="tag--optional">optional</small>
          </label>
          <input
            name="offerPrice"
            className="form-control form--input"
            type="number"
            step={0.01}
            min={0}
            value={formData.offerPrice}
            onChange={handleInputChange}
          />
        </div>

        {/* ------------------------------------ */}

        {/* hr */}
        <div className="col-12 mb-3 mt-5">
          <div className="d-flex align-items-center justify-content-between mt-4">
            <label className="form-label hr--label">Size / Weight</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* size options / 3 */}
        <div className="col-12">
          {/* 1: name */}
          <div className="filters--radio-wrap mb-5" style={{ width: '95.5%' }}>
            <div className="form-check">
              <input
                name="weightOption"
                className="form-check-input"
                type="radio"
                id="formCheck-6"
                value="byName"
                checked={formData.weightOption == 'byName'}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="formCheck-6">
                By Name
              </label>
            </div>

            {/* 2: fixed size */}
            <div className="form-check">
              <input
                name="weightOption"
                className="form-check-input"
                type="radio"
                id="formCheck-4"
                value="fixedSize"
                checked={formData.weightOption == 'fixedSize'}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="formCheck-4">
                Fixed Size / Weight&nbsp;
              </label>
            </div>

            {/* 3: dynamic size */}
            <div className="form-check">
              <input
                name="weightOption"
                className="form-check-input"
                type="radio"
                id="formCheck-5"
                value="dynamicSize"
                checked={formData.weightOption == 'dynamicSize'}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="formCheck-5">
                Dynamic Size / Weight
              </label>
            </div>
          </div>
        </div>
        {/* end size options / 3 */}

        {/* ------- => continue */}
        {/* ------- => based on above */}
        {formData.weightOption == 'dynamicSize' && (
          <div className="col-3 mb-4">
            <label className="form-label form--label">Size / Weight</label>
            <input
              name="weight"
              className="form-control form--input"
              type="text"
              required
              value={formData.weight}
              onChange={handleInputChange}
            />
          </div>
        )}
        {formData.weightOption == 'fixedSize' && (
          <div className="col-3 mb-4">
            <label className="form-label form--label">Min. Size / Weight</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="minSizeWeight"
              options={optionsFixedWeight}
              required
              value={
                formData.weight
                  ? optionsFixedWeight.find(
                      (option) => option.value == formData?.weight
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                setFormData((state) => ({
                  ...state,
                  weight: selectedOption?.value,
                }))
              }
              placeholder={''}
              isClearable
            />
          </div>
        )}

        {(formData.weightOption == 'fixedSize' ||
          formData.weightOption == 'dynamicSize') && (
          <div className="col-3 mb-4">
            <label className="form-label form--label">Measuring Unit</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="unit"
              options={optionsUnits}
              required
              value={
                formData.unitId
                  ? optionsUnits.find(
                      (option) => option.value == formData?.unitId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                setFormData((state) => ({
                  ...state,
                  unitId: selectedOption?.value,
                }))
              }
              placeholder={''}
              isClearable
            />
          </div>
        )}

        {/* end based on above options */}

        <div className="col-12">
          <hr className="visually-hidden" />
        </div>

        {/* units count */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">
            No. of Units / Packages
          </label>
          <input
            name="units"
            className="form-control form--input"
            type="number"
            min={0}
            step={0.01}
            required
            value={formData.units}
            onChange={handleInputChange}
          />
        </div>

        {/* quantity per unit */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">
            Quantity per Unit / Package
            <br />
          </label>
          <input
            name="quantityPerUnit"
            className="form-control form--input"
            type="number"
            min={0}
            step={0.01}
            required
            value={formData.quantityPerUnit}
            onChange={handleInputChange}
          />
        </div>

        {/* !!! calculated total quantity */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">Total Quantity</label>
          <input
            name="quantity"
            className="form-control form--input"
            type="number"
            min={0}
            step={0.01}
            required
            value={(formData.units || 0) * (formData.quantityPerUnit || 0)}
            onChange={handleInputChange}
            readOnly
          />
        </div>

        {/* max quantity per order */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">
            Max Quantity per Order
          </label>
          <input
            name="maxQuantityPerOrder"
            className="form-control form--input"
            type="number"
            min={0}
            step={0.01}
            required
            value={formData.maxQuantityPerOrder}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-12 mb-5">
          <hr className="visually-hidden" />
        </div>

        {/* ---------------------------- */}

        {/* descriptions / ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Description<small className="tag--optional">optional</small>
          </label>
          <textarea
            name="desc"
            className="form-control form--input form--textarea"
            value={formData.desc}
            onChange={handleInputChange}></textarea>
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Description Ar<small className="tag--optional">optional</small>
          </label>
          <textarea
            name="descAr"
            className="form-control form--input form--textarea"
            value={formData.descAr}
            onChange={handleInputChange}></textarea>
        </div>

        {/* hr */}
        <div className="col-12 mb-5">
          <hr className="visually-hidden" />
        </div>

        {/* ------------------------------- */}

        {/* main picture */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Main Picture</label>
          <div className="img--holder">
            <img loading="lazy" />
          </div>
        </div>

        {/* additional pictures (optionals) */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Extra Pictures<small className="tag--optional">optional</small>
          </label>
          <div className="row g-0">
            <div className="col-6 mb-4">
              <div className="img--holder">
                <img loading="lazy" />
              </div>
            </div>
            <div className="col-6 mb-4">
              <div className="img--holder">
                <img loading="lazy" />
              </div>
            </div>
            <div className="col-6">
              <div className="img--holder">
                <img loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------- */}

        {/* submit button */}
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit">
            Save item
          </button>
        </div>
        {/* end submit button */}
      </div>
    </form>
  );
} // end functino
