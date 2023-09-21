import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import APIservice from "../services/APIservice";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const url = "http://127.0.0.1:8000/api/admin/galleries";
  let galleries = APIservice(url);
  console.log(galleries);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-200">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Kyticka admin</span>
              <img className="h-12 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/admin/dashboard/"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Vsetky Fotky
            </Link>
            <Link
              to="/admin/dashboard/albums"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Moje Galerie
            </Link>
            <a
              href="http://localhost:5173/admin/dashboard/galerie"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Slider
            </a>            
              <Link
                to="/admin/dashboard/newphoto"
                className="text-base font-semibold italic leading-6 text-gray-500"
              >
                Pridat fotku
              </Link>
              <Link
                to="/admin/dashboard/newalbum"
                className="text-base font-semibold italic leading-6 text-gray-500"
              >
                Pridat album
              </Link>            
          </Popover.Group>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Odhlasit sa <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="admin/dashboard/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Moje fotky
                  </Link>
                  <Link
                    to="admin/dashboard/albums"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Moje galerie
                  </Link>
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Slider
                  </Link>
                </div>
                <Link
                  to="/admin/dashboard/newphoto"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Pridat fotku
                </Link>
                <Link
                  to="/admin/dashboard/newalbum"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Pridat galeriu
                </Link>
                <div className="py-6">
                  <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Odhlasit sa
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default AdminNav;
