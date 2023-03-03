const Profile = () => {
  return (
    <div>
      <div className="p-6 bg-white rounded-md shadow dark:shadow-gray-800 dark:bg-slate-900">
        <h5 className="mb-4 text-lg font-semibold">Personal Detail :</h5>
        <form>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <label className="font-medium form-label">
                First Name : <span className="text-red-600">*</span>
              </label>
              <div className="relative mt-2 form-icon">
                <i
                  data-feather="user"
                  className="absolute w-4 h-4 top-3 left-4"
                />
                <input
                  type="text"
                  className="pl-4 form-input"
                  placeholder="First Name:"
                  id="firstname"
                  name="name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="font-medium form-label">
                Last Name : <span className="text-red-600">*</span>
              </label>
              <div className="relative mt-2 form-icon">
                <i
                  data-feather="user-check"
                  className="absolute w-4 h-4 top-3 left-4"
                />
                <input
                  type="text"
                  className="pl-4 form-input"
                  placeholder="Last Name:"
                  id="lastname"
                  name="name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="font-medium form-label">
                Your Email : <span className="text-red-600">*</span>
              </label>
              <div className="relative mt-2 form-icon">
                <i
                  data-feather="mail"
                  className="absolute w-4 h-4 top-3 left-4"
                />
                <input
                  type="email"
                  className="pl-4 form-input"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="font-medium form-label">Occupation : </label>
              <div className="relative mt-2 form-icon">
                <i
                  data-feather="bookmark"
                  className="absolute w-4 h-4 top-3 left-4"
                />
                <input
                  name="name"
                  id="occupation"
                  type="text"
                  className="pl-4 form-input"
                  placeholder="Occupation :"
                />
              </div>
            </div>
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1">
            <div className="mt-5">
              <label className="font-medium form-label">Description : </label>
              <div className="relative mt-2 form-icon">
                <i
                  data-feather="message-circle"
                  className="absolute w-4 h-4 top-3 left-4"
                />
                <textarea
                  name="comments"
                  id="comments"
                  className="pl-4 form-input h-28"
                  placeholder="Message :"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          {/*end row*/}
          <input
            type="submit"
            id="submit"
            name="send"
            className="mt-5 text-white bg-indigo-600 border-indigo-600 rounded-md btn hover:bg-indigo-700 hover:border-indigo-700"
            defaultValue="Save Changes"
          />
        </form>
        {/*end form*/}
      </div>
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div>
            <h5 className="mb-4 text-lg font-semibold">Contact Info :</h5>
            <form>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="font-medium form-label">Phone No. :</label>
                  <div className="relative mt-2 form-icon">
                    <i
                      data-feather="phone"
                      className="absolute w-4 h-4 top-3 left-4"
                    />
                    <input
                      name="number"
                      id="number"
                      type="number"
                      className="pl-4 form-input"
                      placeholder="Phone :"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium form-label">Website :</label>
                  <div className="relative mt-2 form-icon">
                    <i
                      data-feather="globe"
                      className="absolute w-4 h-4 top-3 left-4"
                    />
                    <input
                      name="url"
                      id="url"
                      type="url"
                      className="pl-4 form-input"
                      placeholder="Url :"
                    />
                  </div>
                </div>
              </div>
              {/*end grid*/}
              <button className="mt-5 text-white bg-indigo-600 border-indigo-600 rounded-md btn hover:bg-indigo-700 hover:border-indigo-700">
                Add
              </button>
            </form>
          </div>
          {/*end col*/}
          <div>
            <h5 className="mb-4 text-lg font-semibold">Change password :</h5>
            <form>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="font-medium form-label">
                    Old password :
                  </label>
                  <div className="relative mt-2 form-icon">
                    <i
                      data-feather="key"
                      className="absolute w-4 h-4 top-3 left-4"
                    />
                    <input
                      type="password"
                      className="pl-4 form-input"
                      placeholder="Old password"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium form-label">
                    New password :
                  </label>
                  <div className="relative mt-2 form-icon">
                    <i
                      data-feather="key"
                      className="absolute w-4 h-4 top-3 left-4"
                    />
                    <input
                      type="password"
                      className="pl-4 form-input"
                      placeholder="New password"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium form-label">
                    Re-type New password :
                  </label>
                  <div className="relative mt-2 form-icon">
                    <i
                      data-feather="key"
                      className="absolute w-4 h-4 top-3 left-4"
                    />
                    <input
                      type="password"
                      className="pl-4 form-input"
                      placeholder="Re-type New password"
                      required
                    />
                  </div>
                </div>
              </div>
              {/*end grid*/}
              <button className="mt-5 text-white bg-indigo-600 border-indigo-600 rounded-md btn hover:bg-indigo-700 hover:border-indigo-700">
                Save password
              </button>
            </form>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
    </div>
  );
};
export default Profile;
