import IconArrowDown from '@assets/icons/IconArrowDown'
import IconCheck from '@assets/icons/IconCheck'
import type { ListboxProps } from '@headlessui/react'
import { Listbox, Transition } from '@headlessui/react'
import { isEmpty } from 'lodash'
import { Fragment } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Option {
  label: string
  value: string | number
}

export interface HrosSelectProps
  extends ListboxProps<any, Option | Option[], any> {
  label?: string
  placeholder?: string
  value?: Option | Option[]
  disabled?: boolean
  options: Option[]
  multiple?: boolean
  defaultValue?: Option | Option[]
  onChange?: (option: Option | Option[]) => void
}

const HrosSelect = ({
  label,
  placeholder = 'Please select',
  disabled = false,
  multiple = false,
  defaultValue,
  value,
  options = [],
  onChange = () => {},
  ...rest
}: HrosSelectProps) => {
  return (
    <Listbox
      defaultValue={defaultValue}
      multiple={multiple}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {({ open, value: selectedValue, disabled: isDisable }) => {
        return (
          <>
            {label && (
              <Listbox.Label className='block text-sm font-medium leading-6 text-gray-900'>
                {label}
              </Listbox.Label>
            )}
            <div className='relative mt-2'>
              <Listbox.Button
                className={`relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
                  isDisable ? 'cursor-not-allowed' : ''
                }`}
              >
                {isEmpty(selectedValue) ? (
                  <p>{placeholder}</p>
                ) : (
                  <>
                    {Array.isArray(selectedValue) ? (
                      <div className='flex'>
                        {(selectedValue || []).map((val) => (
                          <span
                            className='mr-2 items-center rounded bg-blue-400 px-2'
                            key={val.value}
                          >
                            <span className='block truncate text-white'>
                              {val.label}
                            </span>
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className='flex items-center'>
                        <span className='ml-3 block truncate'>
                          {selectedValue.label}
                        </span>
                      </span>
                    )}
                  </>
                )}
                <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                  <IconArrowDown />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-[#F2F6FF]' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9',
                        )
                      }
                      value={option}
                    >
                      {({ selected: isSelected, active }) => (
                        <>
                          <div className='flex items-center'>
                            <span
                              className={classNames(
                                isSelected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate',
                              )}
                            >
                              {option.label}
                            </span>
                          </div>

                          {isSelected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                              )}
                            >
                              <IconCheck />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )
      }}
    </Listbox>
  )
}

export default HrosSelect
