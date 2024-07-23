export default function Footer() {
  return (
    <div className="md:w-full flex flex-col bg-hcolor p-8 ">
      <div className="px-20">
        <hr />
        <div className="flex flex-col lg:flex-row justify-between my-6">
          <div className="flex flex-col">
            <h1 className="text-xl font-md text-white">Accounts</h1>
            <ul className="pt-3 text-white">
              <li>My Account</li>
              <li>Discount Offer</li>
              <li>Shop</li>
              <li>Cart</li>
              <li>Login/Register</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-md text-white">Quick Links</h1>
            <ul className="pt-3 text-white">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-md text-white">Contact</h1>
            <ul className="pt-3 text-white">
              <li>+923041275276</li>
              <li>email@gmail.com</li>
              <li>Address City</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-md text-white">Social Media</h1>
            <ul className="pt-3 text-white">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twiter</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-md text-white">Niwali</h1>
            <ul className="pt-3 text-white">
              <li>Subscribe</li>
              <li>Get 10% off your first order</li>
              <input
                type="text"
                placeholder="Enter your email"
                className="mt-2 border p-1 border-white rounded bg-hcolor"
              />
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
