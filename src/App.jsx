

function App() {

  return (
    <>

        <div className="py-4 flex justify-center">
            <div className="block p-6 max-w-sm
                    bg-gray-600
                    rounded-lg border
                    border-gray-200 shadow-md">

                <figure
                    className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg
                                h-[250px]
                                mx-auto"
                             src="sum.jpeg"
                             alt="image description"/>
                    </a>
                </figure>

                <h1 className="py-3 text-3xl
                       text-center

                       font-bold
                       text-gray-900
                       dark:text-white">
                    Jahid Hossain
                </h1>


                <table className="w-full
                            text-sm text-left
                            rtl:text-right
                            text-gray-500
                            dark:text-gray-400">

                    <tbody>
                    <tr className="bg-white
                            border-b dark:bg-gray-800
                            dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4
                                font-medium
                                text-gray-900
                                whitespace-nowrap
                                dark:text-white">
                            Age
                        </th>
                        <td className="px-6 py-4">
                            35
                        </td>

                    </tr>
                    <tr className="bg-white
                            border-b
                            dark:bg-gray-800
                            dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4
                                font-medium
                                text-gray-900
                                whitespace-nowrap
                                dark:text-white">
                            Address
                        </th>
                        <td className="px-6 py-4">
                            Mirpur DOHS
                        </td>

                    </tr>
                    <tr className="bg-white
                            dark:bg-gray-800">
                        <th scope="row"
                            className="px-6 py-4
                                font-medium text-gray-900
                                whitespace-nowrap
                                dark:text-white">
                            Contact
                        </th>
                        <td className="px-6 py-4">
                            01753660522
                        </td>

                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </>
  )
}

export default App
