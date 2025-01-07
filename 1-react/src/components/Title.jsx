const Title = ({backUrl="", children}) => {

        if (backUrl) {
          return (
            <>
        
              <h1 style={{ paddingRight: "44px" }}>{children}</h1>
            </>
          );
        }

        return <h1>{children}</h1>;

}

export default Title