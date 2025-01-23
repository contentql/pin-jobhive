'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Media, SiteSetting } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { generateMenuLinks } from '@/utils/generateMenuLinks'

import ToggleTheme from './ToggleTheme'

const Header = ({ headerData }: { headerData: SiteSetting['navbar'] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { logo, menuLinks } = headerData
  const navLinks = menuLinks?.length ? generateMenuLinks(menuLinks) : []

  return (
    <header className='sticky top-0 z-50 bg-background bg-opacity-90 shadow backdrop-blur-md'>
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <Image
              height={1000}
              width={1000}
              alt={(logo?.imageUrl as Media)?.alt!}
              src={(logo?.imageUrl as Media)?.url!}
              className='h-8 w-auto dark:invert'
            />
          </a>
        </div>
        <div className='mr-3 flex flex-1 justify-end lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded p-2.5 text-text/70'>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='size-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navLinks?.map((item, index) => (
            <Link
              key={index}
              target={item?.newTab ? '_blank' : '_self'}
              href={item?.href!}
              className='text-sm/6 font-semibold'>
              {item?.label}
            </Link>
          ))}
        </div>
        <div className='mr-3 hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-sm/6 font-semibold'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
        <ToggleTheme />
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'>
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <Image
                height={1000}
                width={1000}
                alt={(logo?.imageUrl as Media)?.alt!}
                src={(logo?.imageUrl as Media)?.url!}
                className='h-8 w-auto dark:invert'
              />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded p-2.5 text-text/70'>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navLinks?.map((item, index) => (
                  <Link
                    key={index}
                    href={item?.href!}
                    target={item?.newTab ? '_blank' : '_self'}
                    className='-mx-3 block rounded px-3 py-2 text-base/7 font-semibold hover:bg-background/20'>
                    {item?.label}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded px-3 py-2.5 text-base/7 font-semibold hover:bg-background/20'>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header
