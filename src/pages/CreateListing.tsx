import React, { useState } from 'react'
import { Button, RadioButtonGroup } from '../components/buttons'
import { Input, TextArea } from '../components/inputs'
import Label from '../components/Label'

type FormData = {
  type: string
  name: string
  bedrooms: number
  bathrooms: number
  parking: boolean
  furnished: boolean
  address: string
  description: string
  offer: boolean
  regularPrice: number
  discountedPrice: number
  images: string[]
}
const CreateListing = () => {
  const [formData, setFormData] = useState<FormData>({
    type: 'rent',
    name: '',
    bedrooms: 0,
    bathrooms: 0,
    parking: false,
    furnished: false,
    address: '',
    description: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: []
  })
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
    images
  } = formData

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e.target instanceof HTMLButtonElement) e.preventDefault()
    const target = e.target as HTMLInputElement
    setFormData(prevState => ({
      ...prevState,
      [target.id]: target.value === 'yes' ? true : target.value === 'no' ? false : target.value
    }))
  }

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <RadioButtonGroup
          label="Sell / Rent"
          id="type"
          value={type}
          values={['sell', 'rent']}
          onChange={handleChange}
        />
        <Label title="Name" />
        <Input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          maxLength={32}
          minLength={10}
          required
        />
        <div className="flex space-x-6">
          <div className="">
            <Label title="Beds" />
            <Input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={handleChange}
              min={1}
              max={50}
              className="text-center w-full"
            />
          </div>
          <div className="">
            <Label title="Baths" />
            <Input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={handleChange}
              required
              min={1}
              max={50}
              className="text-center w-full"
            />
          </div>
        </div>
        <RadioButtonGroup
          label="Parking spot"
          id="parking"
          value={parking ? 'yes' : 'no'}
          values={['yes', 'no']}
          onChange={handleChange}
        />
        <RadioButtonGroup
          label="Furnished"
          id="furnished"
          value={furnished ? 'yes' : 'no'}
          values={['yes', 'no']}
          onChange={handleChange}
        />
        <Label title="Address" />
        <TextArea
          type="text"
          id="address"
          value={address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <Label title="Description" />
        <TextArea
          type="text"
          id="description"
          value={description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <RadioButtonGroup
          label="Offer"
          id="offer"
          value={offer ? 'yes' : 'no'}
          values={['yes', 'no']}
          onChange={handleChange}
        />
        <Label title="Regular Price" />
        <div className="flex w-full justify-start items-center space-x-6">
          <Input
            type="number"
            id="regularPrice"
            value={regularPrice}
            onChange={handleChange}
            min={50}
            max={400000000}
            required
            className="text-center w-fit"
          />
          {type === 'rent' && <p className="text-md w-full whitespace-nowrap">$ / Month</p>}
        </div>
        {offer && (
          <>
            <Label title="Discounted Price" />
            <div className="flex w-full justify-start items-center space-x-6">
              <Input
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={handleChange}
                min={50}
                max={400000000}
                required={offer}
                className="text-center w-fit"
              />
            </div>
          </>
        )}
        <Label title="Images" />
        <p className="text-gray-600">The first image will cover(max 6)</p>
        <Input
          type="file"
          id="images"
          accept=".jpg,.png,.jpeg"
          multiple
          required
          value={images}
          onChange={handleChange}
          className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600 text-base"
        />
        <Button type="submit" className="mt-6 mb-6 w-full">
          Create Listing
        </Button>
      </form>
    </main>
  )
}
export default CreateListing
