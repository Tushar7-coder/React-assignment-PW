function List({items}){
	return(
		<>
			<ol>
				{
					items.map((item,index)=>{
						return <li key={index}>{item}</li>
					}
					)
				}
			</ol>
		</>
	)
}
export default List;