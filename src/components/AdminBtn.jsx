

const AdminBtn = (props) => {

    return (
      <>
        <button className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">
          {props.btnContent}
        </button>
      </>
    );
}

export default AdminBtn
