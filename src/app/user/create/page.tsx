"use client";

import { useCreateUser } from "@/domain/hooks/useCreateUser.hook";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateUserPage() {
  const router = useRouter();
  const { mutate: createUser } = useCreateUser();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    const userData = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone || "",
      website: formData.website || "",
      address: {
        street: formData.address.street || "",
        suite: formData.address.suite || "",
        city: formData.address.city || "",
        zipcode: formData.address.zipcode || "",
        geo: {
          lat: formData.address.geo.lat || "",
          lng: formData.address.geo.lng || "",
        },
      },
      company: {
        name: formData.company.name || "",
        catchPhrase: formData.company.catchPhrase || "",
        bs: formData.company.bs || "",
      },
    };

    createUser(userData, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setFormData((prev) => {
      let newData = { ...prev };
      let current: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;

      return newData;
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-4">
      <h1 className="mb-6 text-2xl font-bold">Create User</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Phone"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Website"
            />
          </div>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Address</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Street</label>
            <input
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Street"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Suite</label>
            <input
              type="text"
              name="address.suite"
              value={formData.address.suite}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Suite"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="City"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Zipcode</label>
            <input
              type="text"
              name="address.zipcode"
              value={formData.address.zipcode}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Zipcode"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Latitude</label>
              <input
                type="text"
                name="address.geo.lat"
                value={formData.address.geo.lat}
                onChange={handleChange}
                className="w-full p-2 border rounded text-black"
                placeholder="Latitude"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Longitude</label>
              <input
                type="text"
                name="address.geo.lng"
                value={formData.address.geo.lng}
                onChange={handleChange}
                className="w-full p-2 border rounded text-black"
                placeholder="Longitude"
              />
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Company</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              name="company.name"
              value={formData.company.name}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Company Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Catch Phrase</label>
            <input
              type="text"
              name="company.catchPhrase"
              value={formData.company.catchPhrase}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Catch Phrase"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Business Services</label>
            <input
              type="text"
              name="company.bs"
              value={formData.company.bs}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Business Services"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create User
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
