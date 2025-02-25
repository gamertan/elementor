import { Stack, Box } from '@elementor/ui';

const SingleImagePreview = ( { children, ...props } ) => (
	<Box display="flex" { ...props }>
		{ children }
	</Box>
);

SingleImagePreview.propTypes = {
	children: PropTypes.node.isRequired,
};

const Actions = ( { children, sx = {}, ...props } ) => (
	<Box display="flex" width="100%" justifyContent="flex-end" alignItems="center" { ...props } sx={ { mb: 1.5, ...sx } }>
		<Stack direction="row" spacing={ 2 } justifyContent="flex-end" width="100%">
			{ children }
		</Stack>
	</Box>
);

Actions.propTypes = {
	sx: PropTypes.object,
	children: PropTypes.node.isRequired,
};

const Image = ( { src, alt, style = {}, children } ) => (
	<Box margin="0 auto">
		{ children }

		<img
			src={ src }
			alt={ alt }
			style={ { maxWidth: '100%', width: 'auto', maxHeight: '100%', ...style } }
		/>
	</Box>
);

Image.propTypes = {
	style: PropTypes.object,
	children: PropTypes.node,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

SingleImagePreview.Actions = Actions;
SingleImagePreview.Image = Image;

export default SingleImagePreview;
