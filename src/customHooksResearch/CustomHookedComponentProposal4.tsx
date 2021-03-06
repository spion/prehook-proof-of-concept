import { h } from 'preact';
import {prehook, useEffect, useState} from '../../lib/prehook/prehook'


function useWindowSize ()
{
	const size = useState({
		width : window.innerWidth,
		height : window.innerHeight
	});

	function resizeHandler ( e )
	{
		size({
			width : window.innerWidth,
			height : window.innerHeight
		});
	}

	useEffect(false, () =>
	{
		window.addEventListener('resize', resizeHandler);

		return () =>
		{
			window.removeEventListener('resize', resizeHandler);
		}
	});

	return size;
}

export const CustomHookedComponentProposal4 = prehook( function ( props )
{
	const windowSize = useWindowSize();

	return () => (
		<div>
			<h3>Custom hook Proposal 4</h3>
			<p>Window width : { windowSize.value.width }</p>
			<p>Window height : { windowSize.value.height }</p>
		</div>
	)
});
