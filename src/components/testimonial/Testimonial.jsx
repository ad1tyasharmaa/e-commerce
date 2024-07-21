import  { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://content.imageresizer.com/images/memes/Kanye-West-Stare-meme-10.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cupiditate rerum numquam libero minus molestias, sapiente, repudiandae sed qui, suscipit saepe asperiores nobis sint nemo? Hic nam minima natus quasi.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kanye</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D4D35AQGV3eCGo0iJgg/profile-framedphoto-shrink_800_800/0/1720681366330?e=1722063600&v=beta&t=GIAfq_hX0fkdFe3EVOKuSMFXKH37Ysb8uhCvwnzKgdQ" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore, tempore sequi nam ullam numquam, beatae necessitatibus, dignissimos blanditiis quo nisi quas culpa quibusdam facilis repellendus quos eligendi laudantium? Aspernatur.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Lakshay boi</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">CA Finalist</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D4D03AQGFgNkFhOesQA/profile-displayphoto-shrink_800_800/0/1697551863094?e=1726704000&v=beta&t=l-UvIOxCKMkm9K-FI7HeUTca-rZcSwbQiV6LwakMJco" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit cumque accusantium pariatur, neque molestiae quod laborum provident alias quaerat quidem atque quasi! Facere ipsum aliquam velit quo, temporibus delectus aperiam!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamalnayan kala</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Trader</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial