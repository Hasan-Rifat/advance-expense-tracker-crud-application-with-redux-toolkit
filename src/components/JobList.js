import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDeleteJobsInformation } from '../features/JobInformation/JobSlice';


const JobList = ({ job }) => {
    const dispatch = useDispatch()
    const { title, type, salary, deadline, id } = job || {}

    const handelDelete = () => {
        dispatch(fetchDeleteJobsInformation(id))
    }


    return (
        <div className="lws-single-job">
            <div className="flex-1 min-w-0">
                <h2 className="lws-title">{title}</h2>
                <div className="job-footers">
                    <div className="lws-type">
                        {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
                        {
                            type === 'Full Time' && <div><i className="fa-solid fa-stop !text-[#FF8A00]"></i> {type} </div> ||
                            type === 'Internship' && <div><i className="fa-solid fa-stop !text-[#FF5757]"></i> {type} </div> ||
                            type === 'Remote' && <div><i className="fa-solid fa-stop !text-[#56E5C4]"></i> {type} </div>
                        }
                    </div>
                    <div className="lws-salary">
                        <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                        BDT {salary}
                    </div>
                    <div className="lws-deadline">
                        <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                        Closing on {deadline}
                    </div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="hidden sm:block">
                    <Link to={`/jobs/${id}`}>
                        <button type="button" className="lws-edit btn btn-primary">
                            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                            Edit
                        </button>
                    </Link>
                </span>

                <span className="sm:ml-3">
                    <button type="button" className="lws-delete btn btn-danger" onClick={handelDelete}>
                        <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                        Delete
                    </button>
                </span>
            </div>
        </div>
    );
};

export default JobList;