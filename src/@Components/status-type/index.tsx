import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import { theme } from '@Utils/config/theme';

export interface StatusTypeI {
  status?: any;
  color?: any;
  backgroundColor?: any;
}

const BoxContainer = styled(Box)(() => ({
  borderRadius: theme.spacing(1.5),
  textAlign: 'center',
  padding: theme.spacing(0.5, 1.5, 0, 1.5),
}));

/**
 * A component that displays the status of a ticket.
 * @param {StatusTypeI} props - The props for the component.
 * @returns A component that displays the status of a ticket.
 */
export function StatusType({ status, color, backgroundColor }: StatusTypeI) {
  /**
   * Returns the color and background color for the status of a ticket.
   * @param {string} status - the status of the ticket.
   * @returns {string} - the color and background color for the status of a ticket.
   */
  switch (status) {
    case 'submitted':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.skyBlue;
      break;
    case 'active':
      color = theme.misc.darkGreen;
      backgroundColor = theme.misc.leafGreen;
      break;
    case 'paid':
      color = theme.misc.darkGreen;
      backgroundColor = theme.misc.leafGreen;
      break;
    case 'pending_activation':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.skyBlue;
      break;
    case 'pending_verification':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.skyBlue;
      break;
    case 'pending':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.skyBlue;
      break;
    case 'partial paid':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.cowbellYellow;
      break;
    case 'draft':
      color = theme.text.tagColor;
      backgroundColor = theme.misc.backgroundSilver;
      break;
    case 'inactive':
      color = theme.text.tagColor;
      backgroundColor = theme.misc.lightRed;
      break;
    case 'declined':
      color = theme.text.tagColor;
      backgroundColor = theme.misc.lightRed;
      break;
    case 'Open':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.skyBlue;
      break;
    case 'Resolved':
      color = theme.misc.darkGreen;
      backgroundColor = theme.misc.leafGreen;
      break;
    case 'logged_out':
      color = theme.text.tableHeader;
      backgroundColor = theme.misc.backgroundSilver;
      break;
    case 'cancelled':
      color = theme.text.tableHeader;
      backgroundColor = theme.misc.lightRed;
      break;
    case 'pending_approval':
      color = theme.misc.navyBlue;
      backgroundColor = theme.misc.skyBlue;
      break;
    case 'Checked-in':
      color = theme.misc.darkGreen;
      backgroundColor = theme.misc.leafGreen;
      break;
    case 'query':
      color = theme.palette.primary.contrastText;
      backgroundColor = theme.misc.matRed;
      break;
    case 'resolved':
      color = theme.misc.darkGreen;
      backgroundColor = theme.misc.leafGreen;
      break;
    case 'open':
      color = theme.text.tagColor;
      backgroundColor = theme.misc.backgroundSilver;
      break;
    case 'request_sent':
      color = theme.text.tagColor;
      backgroundColor = theme.misc.badgeBlue;
      break;
    case 'request_rejected':
      color = theme.text.label;
      backgroundColor = theme.misc.cardRed;
      break;
    case 'request_accepted':
      color = theme.misc.darkGreen;
      backgroundColor = theme.misc.leafGreen;
      break;
    case 'expired':
      color = theme.palette.primary.contrastText;
      backgroundColor = theme.misc.matRed;
      break;
    default:
      color = theme.palette.primary.contrastText;
      backgroundColor = theme.palette.primary.dark;
  }
  return (
    <Box>
      {status ? (
        <BoxContainer display='inline-grid' bgcolor={backgroundColor}>
          <Typography variant='imageHeader' textTransform='capitalize' color={color}>
            {status.split('_').join(' ').toLocaleUpperCase()}
          </Typography>
        </BoxContainer>
      ) : (
        'N/A'
      )}
    </Box>
  );
}
