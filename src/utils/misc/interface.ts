import { ReactNode } from 'react';

export interface SignInDataI {
  email: string;
  password: string;
}

export interface SignInViaMobileDataI {
  mobileNumber: string;
}

export interface NewUserI {
  name: string;
  email: string;
  phone: string;
  role_id?:
    | string
    | null
    | {
        id?: string;
        label: string;
        value: string;
      };
  display_picture:
    | string
    | {
        name?: string;
        url?: string;
      };
  reporting_managers: string[];
  designation?:
    | string
    | {
        label: string;
        value: string;
      };
  vendors: string[];
  properties: {
    space_id: string;
    roles:
      | string[]
      | {
          id: string;
          label: string;
          value: string;
        }[];
  }[];
  // spaces:
  //   | {
  //       space_id: string;
  //       permission: string;
  //     }[]
  //   | string[];
  spaces: any[];
  status: string | boolean;
  role?: any;
  other_designation?:
    | string
    | {
        label: string;
        value: string;
      };
  is_other_designation?: boolean;
}

export interface UpdatedByI {
  name: string;
  email: string;
  phone: string;
  is_deleted: boolean;
  status: string;
  role_id: string;
  first_time: boolean;
  admin_created_by: string;
  admin_updated_by: string;
  created_at: string;
  updated_at: string;
  __v: number;
  customer_id: string;
  hash_password: string;
  last_sign_in: string;
  is_other_designation: boolean;
  updated_by: string;
  designation: string;
  deviceToken: string;
  display_picture: string;
  employee_id: string;
  id: string;
}
export interface UserI {
  map(arg0: (item: string) => JSX.Element): ReactNode;
  AllocatedSpace: AllocationPolicyI[];
  flexi_allowed: string;
  thumbnail: string | undefined;
  allocationPolicy: AllocationPolicyI[];
  role: any;
  first_time: any;
  id: string;
  _id: string;
  access_key_id: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  display_picture: { url: string; name: string };
  companyName: any;
  address: AddressI;
  user_type: string;
  is_adminship_active: boolean;
  role_id: string;
  status: string;
  hash_password: string;
  vendor_id: string;
  created_by: string;
  created_at: string;
  updated_by: UpdatedByI;
  updated_at: string;
  last_sign_in: string;
  spaces: string[];
  reporting_managers: string[];
  properties: {
    space: PropertyDetails;
    roles: RoleI[];
  }[];
  vendors: string[];
  is_other_designation: boolean;
  customer_id: string;
  employee_id: string | number;
  flexi_booking: boolean;
  assigned_policies: any[];
  updated_on: string;
  userrole: any;
  permissions?: PermissionsI[];
}
export interface VendorI {
  id: string;
  name: string;
  address: AddressI;
  gst: string;
  pan: string;
  // owner_informations: OwnerInformationI;
  bank_details: BankDetailsI;
  spoc: string[];
  total_spaces: number;
  status: string;
  account_id: string;
  logo: string;
  created_by?: string;
  created_at?: string;
  updated_by?: string;
  updated_at?: string;
}

export interface OwnerContactDetailsI {
  id: string;
  ownerName: string;
  ownerDesignation: {};
  ownerEmail: string;
  ownerPhone: string;
  ownerAadhaarNo: string;
  ownerPanNo: string;
  isPrimary: boolean;
}

export interface OwnerDetailsI {
  id: string;
  name: string;
  mobile: string;
  email: string;
  aadhaar: string;
  panNo: string;
  address: string;
  locationName: string;
  primary: boolean;
  designations: {};
}

export interface BasicDetailsI {
  locationName: string;
  address: {
    pincode: string;
    line1: string;
    line2: string;
    area: string;
    city: string;
  };
  gstNo: string;
  panNo: string;
  logoUrl: string;
}

export interface UploadedDocumentListI {
  contactName: string;
  pdfName: string;
  fileUrl: string;
}

export interface FlexiDataI {
  id: string;
  username: {
    name: string;
    desk: string;
  };
  company: string;
  type: string;
  period: string;
  startDate: string;
  allotedDesk: string;
  status: string;
}

export interface DedicatedDataI {
  id: string;
  username: {
    name: string;
    desk: string;
  };
  noOfUsers: string;
  noOfDesks: string;
  contactEndsOn: string;
  status: string;
}

export interface NotificationDataItemI {
  type: string;
  title: string;
  time: string;
  email?: string;
  roomName?: string;
  description: string;
}

/**
 * Notification item-data as per new design
 * Change it as per api data in future
 */
export interface NotificationItemI {
  id: string;
  isDelete: boolean;
  isRead: boolean;
  sender_id: string;
  notificationType?: string;
  notification_message: string;
  credit_request_id?: string;
  notification_sender_name: string;
  notification_sender_role: string;
  notification_title: string;
  notification_sub_title?: string;
  notify_user_ids: string[];
  created_at: Date;
  updated_at: Date;
}

export interface CalendarScheduledEventI {
  title: string;
  color: string;
  start: Date;
  end: Date;
}

export interface DropdownMenuItemI {
  label: string;
  handleClick: () => void;
}

export interface DocumentsI {
  agreement: {};
  gstProof: {};
  addressProof: {};
  otherDocuments: {};
}
export interface CreateVendorI {
  id?: string;
  name: string;
  owner_name: string;
  owner_email: string | {};
  phone: string;
  address: AddressI;
  gst: string;
  gst_certificate: string;
  pan: string;
  spoc: [];
  total_spaces: string;
  bank_details: BankDetailsI;
  logo: string;
  contract: string;
  owner?: string;
}

export interface AddressI {
  _id?: string;
  line1: string;
  area: string;
  pincode: string;
  city: {
    _id?: string;
    name: string;
    state: string;
    country: {
      _id?: string;
      code: string;
      name: string;
      ph_code: string;
    };
  };
  map_Id?: string;
}

export interface OwnerInformationI {
  name: string;
  designation: { id: string; name: string };
  email: string;
  phone: string;
  // aadhar: string;
  // pan: string;
  primary: boolean;
}

export interface BankDetailsI {
  _id?: string;
  bank_name: string;
  account_name: string;
  account_number: string;
  ifsc: string;
  cancel_cheque: string;
}

export interface SpacePermissionI {
  space_id: string;
  role_id: string;
}

export interface PropertyI {
  contract_period: number;
  contract_start_date: string;
  is_draft: string;
  is_verified: string;
  customer_contract: CustomerContractI;
  floor_plan: FloorsI[];
  requirements: RequirementsI;
  vendor_contract: CustomerContractI;
}

export interface SpaceI {
  users: UserI[];
  documents: [];
  visual_tour: VisualTourImageI[];
  floors: FloorsI[];
  contract_documents: string[];
  name: string;
  vendor_id: string;
  address: AddressI;
  gst: string;
  pan: string;
  status: string;
  publish: boolean;
  is_deleted: boolean;
  step_value_status: number;
  created_by: string;
  updated_by: string;
  system_id: string;
  center_manager: string;
  building_addons: BuildAddOnAndAmenitiesI[];
  created_at: string;
  updated_at: string;
  __v: number;
  space_details: SpaceDetailsI;
  inventory_addons: InventoryAddOnI;
  id: string;
  _id?: string;
  reporting_manager?: SpocI[];
  contract_status?: boolean;
  operational_hours: OperationalHoursI;
}

export interface CompanySetupI {
  logo: string;
  name: string;
  address?: AddressI;
  gst: string;
  gst_certificate: string;
  pan: string;
  bank_details: BankDetailsI;
  contract: string;
  tcCheck1: boolean;
  tcCheck2: boolean;
  spoc: [];
  id?: string;
}

export interface PropertyDetails {
  id: string;
  name: string;
  address: AddressI;
  building_amenities: BuildAddOnAndAmenitiesI[];
  building_addons: BuildAddOnAndAmenitiesI[];
  center_manager: string;
  contract_documents: any[];
  documents: any[];
  floors: any[];
  gst: string;
  inventory_addons: InventoryAddOnI[];
  is_deleted: boolean;
  pan: string;
  status: string;
  updated_at?: string;
  users: any[];
  vendor_id: string;
  visual_tour: VisualTourImageI[];
  step_value_status: number;
  publish?: boolean;
  vendor_details: VendorI;
}

export interface AddOnI {
  id?: string;
  addon_type?: string;
  amenity_type?: string;
  icon: string;
  name: string;
  active: boolean;
  is_master: boolean;
  inputs: WifiInputsI;
  credit: string;
  creditToMaster: boolean;
}

export interface WifiInputsI {
  _id: string;
  input_name: string;
  placeHolder: string;
  value: string;
}

export interface BuildAddOnAndAmenitiesI {
  type: string;
  tag_type: any;
  _id?: string;
  addon_type?: string;
  amenity_type?: string;
  icon: string;
  name: string;
  active: boolean;
  id: string;
  is_master: boolean;
  inputs: WifiInputsI[];
  credit: string;
  creditToMaster: boolean;
  isCreditSaved?: boolean;
  cost_type: string;
}
export interface InventoryAddOnI {
  name: string;
  id: string;
  addOnList: {
    icon: string;
    name: string;
    credit?: string;
    id: string;
    _id: string;
    active: boolean;
    newAddon: boolean;
    is_master: boolean;
    creditToMaster: boolean;
    isCreditSaved?: boolean;
  }[];
}

export interface CreateNewAddon {
  _id: number;
  icon: string;
  addon_type: string;
  tag_type: string[];
  newAddon: boolean;
  name: string;
  credit: string;
  is_master: boolean;
  active: boolean;
}

export interface OperationalHoursI {
  find(arg0: (day: { day: string }) => boolean): unknown;
  day: string;
  start_time: string;
  end_time: string;
  is_open: boolean;
}

export interface PublishPropertyI {
  id?: string;
  name: string;
  description: string;
  is_same: boolean;
  operational_hours: OperationalHoursI[];
  space_details?: SpaceDetailsI;
  address?: AddressI;
  floors: FloorNameI[];
  dedicated_desks?: DesksI;
  add_ons: AddonsI;
}

export interface AddonsI {
  build_add_ons: AddOnI[];
  inventory_add_ons: InventoryAddonsI[];
}

export interface InventoryAddonsI {
  name: string;
  id: string;
  addOnList: AddOnI[];
}

export interface SpaceDetailParkingInfo {
  id: string;
  label: string;
  value: boolean;
}
export interface SpaceDetailsI {
  space_types: any[];
  other_space_type?: string;
  total: number;
  parking: boolean | SpaceDetailParkingInfo;
}

export interface VisualTourImageI {
  id?: string;
  imageUrl?: any;
  space_id?: string;
  image: string;
  tag_name: string;
  description: string;
  capacity: string;
  amenities: string[];
  is_cover_image: boolean;
  _id?: string;
}

export interface VisualTourImageIWithOther extends VisualTourImageI {
  other_tag_name: string;
}

export interface FloorNameI {
  id: string;
  label: string;
  value: string;
  prefix: string;
}

export interface DesksI {
  id?: string;
  name: string;
  total_desks: string;
  credit: string;
}

export interface MeetingRoomI {
  amenities: any;
  id?: string;
  name: string;
  total_seats: string;
  credit: string;
}
export interface RaiseQuery {
  category: string;
  description: string;
  file: string;
}
export interface RaiseAmenities {
  meeting: string;
  title: string;
  floor: string;
}

export interface QueryI {
  status: string;
  category: string;
  created_by: CustomerUserI;
  updated_by: string;
  space_id: string;
  customer_id: string;
  created_at: string;
  updated_at: string;
  id: string;
  query_id: string;
  description?: string;
}

export interface InventoryCostingI {
  id: string;
  items: string;
  quantity: string;
  billingType: string;
  price: string;
  billingPeriod: string;
  rentStartDate: string;
  incrementPercentage: string;
  incrementFrequency: string;
  totalAmount: string;
}

export interface ComplementaryCreditsI {
  _id?: string;
  id?: string;
  contract_id?: string;
  addon_id: string;
  is_active?: boolean;
  amenity_id: string;
  items: string;
  name: string;
  quantity: string;
  quantity_type: string;
  availableCreds?: number | string;
  period: string;
  start_date: string;
  carry_forward?: boolean;
  createdAt?: string;
  created_by?: string;
  updatedAt?: string;
  updated_by?: string;
  customer_id?: string;
  __v?: string;
}

export interface DistributePolicyI {
  _id: string;
  id: string;
  policy_name: string;
  totalPersons: string | number;
  AvailableCredit: string | number;
  created_user: CustomerUserI;
  end_date: string;
  status: string;
  customers: CustomerUserI[];
  groups: CustomerGroupI[];
}

export interface ComplementaryCreditsFormI {
  name: number;
  quantity: number;
  quantity_type: { id: string; label: string; value: string };
  price: string;
  period: { id: string; label: string; value: string };
  start_date: string;
  carry_forward: { id: string; label: string; value: string };
}

export interface SpocI {
  _id?: string;
  id?: string;
  name: string;
  display_picture: string;
  primary: boolean;
  email: string;
  phone: string;
  vendors: string[];
  role_id: string;
  is_other_designation: boolean;
  spaces: [];
  first_time: boolean;
  status: string;
  is_deleted: boolean;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  __v: number;
  hash_password: string;
  last_sign_in: string;
  designation: string;
}
export interface CustomerI {
  finalData: { status: string };
  publish: boolean;
  bank_details: BankDetailsI;
  index: string;
  requirements?: any;
  role?: any;
  first_time?: any;
  id: string;
  name: string;
  designation?: string;
  email?: string;
  phone: string;
  display_picture?: { url: string; name: string };
  logo: { url: string; name: string };
  companyName?: any;
  address?: AddressI;
  user_type?: string;
  is_adminship_active?: boolean;
  role_id?: string;
  status: string;
  hash_password?: string;
  vendor_id?: string;
  created_by?: string;
  created_at?: string;
  updated_by?: string;
  updated_at?: string;
  last_sign_in?: string;
  spaces?: string[];
  vendors?: string[];
  is_other_designation?: boolean;
  account_id?: string;
  users?: string;
  property?: string;
  gst: string;
  pan: string;
  owner?: string;
  reporting_managers: SpocI[];
  owner_email?: string | object;
  owner_name?: string;
  customerId?: any;
  customer_contract?: any;
  contact_ending_on?: any;
  contract?: string;
  plan_type?: string;
  rowId?: string;
  totalUsersCount: number;
  _id?: string;
  no_of_employees?: string;
  website?: string;
  industry?: string;
}

export interface AllocationI {
  finalData: { status: string };
  id: string;
}
export interface TagsI {
  _id: string;
  floor_id: string;
  tag_type: string;
  name: string;
  total_desks: number;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  __v: number;
  id: string;
}

export interface FloorsI {
  _id: string;
  id: string;
  status: string;
  name: string;
  prefix: string;
  floor_capacity: number;
  space_id: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  __v: number;
  floor_plan_key: string;
  floor_plan_url: string;
  tags: TagsI[];
}

export interface FlexiI {
  company_name: string;
  desk_details?: string;
  id: string;
  name: string;
  pass_type: string;
  email?: string;
  phone: string;
  display_picture?: { url: ''; name: '' };
  logo?: { url: ''; name: '' };
  address?: AddressI;
  user_type?: string;
  start_date: string | Date;
  role_id?: string;
  status: string;
  hash_password?: string;
  alloted_desk?: string;
  created_by?: string;
  created_at?: string;
  updated_by?: string;
  updated_at?: string;
  last_sign_in?: string;
  spaces?: string[];
  account_id?: string;
  users?: string;
  property?: string;
  gst?: string;
  pan?: string;
  owner?: string;
  owner_email?: string | object;
  owner_name?: string;
  customerId?: any;
  customer_contract?: any;
  contact_ending_on?: any;
  contract?: string;
  plan_type?: string;
  rowId?: string;
  floor?: string;
  desk?: string;
  add_on?: string;
}
export interface SubscriptionI {
  id?: string;
  name: string;
  designation: string;
  employee_id: string;
  auto_approval?: string;
}
export interface BillingI {
  total_payable: string;
  invoice_no: ReactNode;
  payment_mode: string;
  status: string;
  _id: string;
  id: string;
  invoice_id: string;
  name: string;
  quantity: number;
  billing_type: string;
  price: number;
  invoice_date: string;
  due_date: string;
  total_amount_due: number;
  amount_paid: string;
  mode_of_payment: string;
  payment_status: string;
  comment: string;
  document: string;
  totalOutStandingsAmountRounded: number;
}
export interface SelectedRowsI {
  allSelected: boolean;
  selectedCount: number;
  selectedRows: any[];
}
export interface AddUserDataI {
  name: string;
  email: string;
  display_picture?: string;
  designation: string;
  other_designation?: string;
  employee_id: string;
  phone?: string;
  reporting_manager_email?: string;
  status?: string;
  role_id?: string;
  flexi_allowed?: string;
  role?: string;
  properties: [];
  roles: [];
}
export interface GroupUserDataI {
  group_name: string;
}

export interface AddCustomerI {
  name: string;
  owner_email?: string;
  address?: AddressI;
  phone: string;
  gst: string;
  pan: string;
  reporting_managers: SpocI[];
  logo?: { url: ''; name: '' };
}

export interface CustomerUserI {
  AllocatedSpace: AllocationPolicyI[];
  customer?: CustomerI;
  flexi_allowed?: string;
  customer_id: string;
  designation?: string;
  email?: string;
  employee_id?: string;
  first_time?: boolean;
  id: string;
  is_deleted?: boolean;
  name: string;
  phone?: string;
  role?: RoleI;
  role_id?: string;
  status?: string;
  is_other_designation?: boolean;
  reporting_manager_email?: string;
  updated_at?: string;
  updated_by: UpdatedByI;
  allocationPolicy?: AllocationPolicyI[];
  admin_updated_by?: UserI;
  display_picture?: string;
  CustomerUserI?: UserI;
}

export interface PartnerInfoI {
  website: ReactNode;
  partner_name: string;
  partner_address: AddressI;
  gst: string;
  phone: string;
  email: string;
  web: string;
}

export interface VendorBillingProfileI {
  logo: string;
  cin_no: string;
  pan_no: string;
  state_code: number;
  sac_no: string;
  gst_no: string;
  bank_details: {
    company_name: string;
    account_number: string;
    bank_name: string;
    ifsc: string;
    branch: string;
  };
  terms: string;
  contact_details: {
    name: string;
    email: string;
    phone: string;
    web: string;
  };
}

export interface CustomerInvoiceI {
  id: string;
  _id: string;
  invoice_no: string;
  invoice_id: string;
  company_name?: string;
  invoice_date?: string;
  due_date?: string;
  total_amount_due?: string;
  amount_paid: string;
  payment_mode?: string;
  comments?: string;
  payment_status: string;
  space: any;
  purchase_order_no: string;
  purchase_order_date: string;
  place_of_supply: string;
  gst_percent: number;
  subTotal: number;
  vatAmount: number;
  totalAmount: number;
}

export interface InvoiceI {
  invoice_id?: string;
  _id?: string;
  id?: string;
  customer?: string;
  purchase_order_no: string | number;
  purchase_order_date: string;
  invoice_date: string;
  due_date: string;
  place_of_supply: string;
  item: {
    item: string;
    quantity: string | number;
    price: string | number;
    total_amount: string | number;
    billing_type: string;
  }[];
  sub_total: string | number;
  total?: string | number;
  cgst: string | number;
  sgst: string | number;
  igst: string | number;
  less_discount: string | number;
  total_payable: string | number;
  terms: string;
  notes: string;
  vat?: string | number;
  vatAmount?: string | number;
  paid_date?: string;
  amount_paid?: string | number;
  attachment?: string;
  comments?: string;
  payment_mode?: string;
  status?: string;
}

export interface CustomerGroupI {
  customer_id: string;
  id: string;
  is_deleted?: boolean;
  name: string;
  users?: string[];
  designation?: string;
  email?: string;
}

export interface CustomerReportI {
  report_name: string;
  total_flexi_desks: number;
  total_users: number;
  total_properties: number;
  date_range: string;
  dates: string[];
  no_of_desks: string[];
}

export interface AllocationPolicyUserListI extends CustomerUserI, CustomerGroupI {
  id: string;
  name: string;
  designation?: string;
  email?: string;
  users?: any;
}

export interface CreateAllocationPolicyI {
  policy_name: string;
  fund_per_person: string;
  recurring: string;
  customer_users: [
    {
      is_active: boolean;
      customer_user_id: string;
    },
  ];
  group: [
    {
      is_active: boolean;
      group_id: string;
    },
  ];
}

export interface AllocationPolicyI {
  time(time: string | Date): ReactNode;
  checked: ReactNode;
  id: string;
  space?: SpaceI;
  policy_name: string;
  allocationDetails: string;
  addedBy: string;
  status: string;
  fund_per_person: number;
  recurring: string;
  carry_forward: string;
  created_user?: {
    name: string;
    display_picture: string;
  };
}

export interface AddPropertyDedicatedTypeI {
  contractStartDate: string;
  contractEndDate: string;
  contractPeriod: string;
  lockInPeriod: string;
  noticePeriod: string;
  rentFreeDays: number;
}

// for create and edit vendor role
export interface PropertyModuleI {
  module_id: string;
  module_name?: string;
  permissions: {
    id?: string;
    is_view: boolean;
    is_edit: boolean;
    is_add: boolean;
    is_delete: boolean;
    __v?: number;
  };
}
export interface AddNewVendorRoleI {
  name: string;
  type: string;
  complete_access: boolean;
  permissions: PropertyModuleI[];
}
export interface RoleI {
  role: string;
  role_id: string | undefined;
  is_deleted: boolean;
  name: string;
  type: string;
  status: boolean;
  complete_access: boolean;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  __v: number;
  id: string;
  permissions: PropertyModuleI[];
}

export interface CreateVendorCustomerI {
  total_amount_due: number;
  customer: {
    id?: string;
    name: string;
    owner_name: string;
    owner_email: string | {};
    phone: string;
    address: AddressI;
    gst: string;
    pan: string;
    reporting_managers: [];
    contract: string;
  };
  space_id: string;
  requirements: RequirementsI;
  vendor_contract: VendorContractI;
}

export interface RequirementsI {
  contract_start_date: string;
  contract_period: number;
  contract_lockin_period: string;
  contract_notice_period: string;
  contract_rent_free_period: number;
  invoice_total: string;
  is_verified: string;
  id: string;
  name: string;
  vendor_id: string;
  center_manager_name: string;
  owner_name: string;
  center_manager_email: string | {};
  phone: string;
  address?: AddressI;
  bank_details: BankDetailsI;
  gst: string;
  pan: string;
  contract_documents: string;
  gst_certificate: string;
  logo?: string;
  owner?: string;
  owner_email?: string | {};
  contract?: string;
  is_admin: boolean;
  is_draft: boolean;
  is_deleted: boolean;
  updated_by: string;
  created_by: string;
  customer_id: string;
  space_id: string;
  created_at: string;
  updated_at: string;
  security_deposit: string | number;
  __v: number;
  space: SpaceI;
  tags: TagsI[];
  customer: CustomerI;
  totalUsersCount?: string | number;
  invoices: [];
}

export interface CustomerContractI {
  security_deposit: number;
  cost_inventory: CostInventoryI[];
  contract_agreement: string;
  _id: string;
  is_active: boolean;
  same_as_customer: boolean;
  updated_by: string;
  created_by: string;
  invoice_type: string;
  customer_id: string;
  space_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface VendorContractI {
  cost_inventory: CostInventoryI[];
  contract_agreement: string;
}

export interface CostInventoryI {
  name: string;
  quantity: number;
  billing_type: string;
  price: number;
  billing_period: string;
  rent_start_date: string;
  increment_percentage: number;
  increment_frequency: number;
}

export interface FloorPlanTagsI {
  tag_type: string;
  total_desks: number;
  name: string;
  credit: number;
  start_desk: string;
  end_desk: string;
  total_seats: number;
}

export interface VendorPropertyBroadCast {
  id: string;
  broadcast_subject: string;
  broadcast_message: string;
  customers: {
    id: string;
    name: string;
    logo: string;
    total_users?: string;
  }[];
}

export interface VendorPropertyEventsI {
  date: string;
  events: VendorPropertyEventI[];
}

export interface VendorPropertyEventI {
  id: string;
  cover_pic: string;
  name: string;
  about: string;
  event_timings: {
    eventDate: Date | string;
    startTime: Date | string;
    endTime: Date | string;
  }[];
  start_date?: string;
  end_date?: string;
  location: string;
  hosts: [];
  tags: string[];
  languages: string[];
  entryFee: string;
  privacy: string;
  invitedCustomerIds?: CustomerI[];
  created_by?: string;
  cantGo?: number;
  going?: number;
  mayBe?: number;
  totalGuests?: number;
  multiday_event_timings?: { start_date: string; end_date: string }[];
  is_entryfee_applied?: string | boolean;
  is_multiday_event?: boolean;
  event_capacity: string | number;
  isOutsidersAllowed: boolean;
  is_deleted: boolean;
}

export interface VendorEventPostI {
  id: string;
  event_id: string;
  text: string;
  file: string;
  created_at: string;
  created_by: {
    name: string;
    designation: string;
    display_picture: string;
    _id: string;
  }[];
}

export interface ContactI {
  id: string;
  name: string;
  contact_person: string;
  designation: string;
  email?: string;
  phone: string;
}

export interface ActivityCommentI {
  attachmentType: string;
  activity_comment: ActivityCommentI[];
  comment_attachments: File[];
  attachmentUrl: string[];
  attachments: string[];
  info_message: string;
  created_by?: any;
  created_by_customer?: CustomerUserI;
  created_at: string;
  id: string;
  commentAttachmentsNames: string[];
  attachment?: string;
}

export interface TicketsI {
  id: string;
  activity_comment: ActivityCommentI[];
  activity_status: any;
  activity_assignee: any;
  requested_by_mobile: string;
  requested_by_company: CustomerI;
  requested_by_username: CustomerUserI;
  issue_category: string;
  issue_title: string;
  issue_description: string;
  priority: string;
  assigned_to: any;
  status: string;
  created_by: any;
  space: PropertyDetails;
  ticket_id: string;
  created_at: string;
  ticket_attachments: string[];
}

export interface NewMeetingI {
  title: string;
  meeting_timing: string;
  meeting_room: string;
  company: string;
  company_user: string;
  invites: string[];
  time: string;
  end_timing: string;
  start_timing: string;
  meeting_date: string;
  // addons: string;
}

export interface AllocatedUserI {
  created_at: string;
  created_by: string;
  customer: {
    name: string;
  };
  customer_id: string;
  email: string;
  start_date: string;
  end_date: string;
  id: string;
  invited_by: {
    name: string;
    designation: string;
    email: string;
    phone: string;
    id: string;
  };
  is_deleted: boolean;
  name: string;
  status?: string;
  guest: {
    _id: string;
    name: string;
    phone: string;
  }[];
  phone: string;
  space_id: string;
  updated_at: string;
  updated_by: string;
}

export interface GuestListDataI {
  id?: string;
  invited_by: {
    name: string;
    phone: string;
    purpose: string;
  };
  customer: {
    name: string;
  };
  start_date: string;
  status: string;
  invite_date: string;
  guest: {
    _id: string;
    name: string;
    phone: string;
  }[];
}

export interface CompanyDetailI {
  company_name: string;
  employee_id: string | number;
  allocated_desks: {
    floor_name: string;
    total_desks: number;
  }[];
}

export interface ActivityDetailI {
  date: string;
  activity: {
    time: string;
    name: string;
  }[];
}

export interface UserProfileDetailsI {
  name: string;
  designation: string;
  email: string;
  phone: string;
  company_info: CompanyDetailI;
  activity: ActivityDetailI[];
}

export interface VendorActivePropertyCustomersWithFloorPlanI {
  customer_contract: CustomerContractI;
  floor_plan: CustomerPropertyFloorI[];
  requirements: VendorPropertyCustomerRequirementsI;
  vendor_contract: CustomerContractI;
}

export interface VendorPropertyCustomerRequirementsI {
  contract_lockin_period: number;
  contract_notice_period: number;
  contract_period: number;
  contract_rent_free_period: number;
  contract_start_date: string;
  customer: CustomerI;
  customer_id: string;
  id: string;
  is_draft: boolean;
  is_admin: boolean;
  space: SpaceI;
  space_id: string;
  tags: {}[];
  totalUsersCount: number;
  is_verified: string;
}

export interface CustomerPropertyFloorI {
  id: string;
  name: string;
  prefix: string;
  space_id: string;
  status: boolean;
  floor_capacity: number;
  floor_plan_key: string;
  floor_plan_url: string;
  tags: FloorPlanTagsI[];
}
export interface ActivityDataI {
  day: number;
  date: string;
  activities: {
    time: string;
    name: string;
  }[];
}

export interface RecordI {
  'Name*'?: string;
  'Email*'?: string;
  'Phone*'?: string;
  Designation?: string;
  'Employee Id'?: string;
  'Role*'?: string;
  name?: string;
  capacity?: number;
  floor_name?: string;
  total_number_desk?: number;
}

export interface BulkUploadErrorDataI {
  Result: string;
  Record: RecordI;
  Error: string;
}

export interface TransactionAllocationPolicies {
  id: string;
  policy: string;
  allocation_details: string;
  status: string;
}
export interface APIPaginationI {
  page: number;
  search: string;
  limit: number;
  totalResults: number;
}

export interface MeetingFormDataI {
  title: string;
  meeting_date: string;
  start_timing: string;
  end_timing: string;
  meeting_room: { value: string; label: string };
  company: { value: string; label: string };
  company_user: {
    value: any;
    id: any;
    email: any;
    name: any;
  };
  invites: {
    [x: string]: any;
    id: any;
    email: any;
    name: any;
  };
}

export interface TicketFormDataI {
  requested_by_mobile: string;
  requested_by_company: object | string;
  requested_by_username: object | string;
  issue_category: object | string;
  issue_title: string;
  issue_description: string;
  priority: object | string;
  assigned_to: object | string;
}

export interface TransactionDataI {
  description: string;
  type: string;
  amount: number;
  comment: string;
  status: string;
  space_id: string;
  id: any;
  user_details_for: UserI[];
  user_details_by: UserI[];
  paid_to: string;
  property: string;
  property_address: any;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
}
export interface UserActivityDataI {
  _id: string;
  user_id: string;
  space_id: string;
  customer_id: string;
  activity_type: string;
  activity_sub_type: string;
  activity_message: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
}

export interface ActivityHistoryDataI {
  _id: string;
  user_id: string;
  space_id: string;
  customer_id: string;
  activity_type: string;
  activity_sub_type: string;
  activity_message: string;
  created_by: string;
  updated_by: string;
  activity_id: 72;
  created_at: string;
  updated_at: string;
  Activity_by: any;
}

export interface DropdownOptionI {
  id: string;
  label: string;
  value: string;
  name?: string;
  display_picture?: string;
}

/**
 * Sales lead module flow
 */
export interface LeadPipelineDataI {
  id?: string;
  requirements: string;
  company_name: string;
  contact_person: string;
  lead_owner: string;
  priority: string;
  status: string;
}

export interface LeadContactPersonsI {
  _id: string;
  id?: string;
  name: string;
  is_other_designation: boolean;
  designation?: { value: string; label: string };
  other_designation?: string;
  contact_type?: string;
  phone_number: number | string;
  email: string;
}

export interface LeadContactPersonI {
  _id?: string;
  id?: string;
  name: string;
  is_other_designation?: boolean;
  designation: string;
  other_designation?: string;
  phone_number: number | string;
  email: string;
}

export interface LeadContactFormI {
  _id?: string;
  name: string;
  website?: string;
  industry?: string;
  number_of_employees?: { value: string; label: string };
  contactpersons?: LeadContactPersonsI[];
  contact_person?: string[];
  contact_type?: string;
  created_at?: string;
  created_by?: string;
  is_deleted?: boolean;
  space_id?: string;
  vendor_id?: string;
  updated_at?: string;
  updated_by?: string;
  head_quarter?: string;
  __v?: string;
}

export interface UpdateCompanyI {
  id: string;
  owner: string;
  gst_certificate: string;
  name: string;
  address: AddressI;
  bank_details: BankDetailsI;
  spoc?: string;
  logo: string;
  gst: string;
  pan: string;
  contract: string;
}

export interface SalesLeadI {
  id: string;
  number_of_desks: string;
  customization_required: string;
  description: string;
  space: PropertyDetails;
  budget: string;
  expected_move_in_date: string;
  expected_lockin_period: string;
  expected_agreement_period: string;
  lead_owner: DropdownOptionI;
  lead_type: DropdownOptionI;
  lead_stage: LeadStageI;
  lead_source: string;
  last_contacted: string;
  lead_sales_person: UserI[];
  company_name?: DropdownOptionI;
  contact_person: LeadContactPersonsI[];
  contactpersons: LeadContactPersonsI[];
  lead_comment: [];
  created_at: string;
  updated_at: string;
}

export interface LeadI {
  lead_attachment: File[];
  id: string;
  _id: string;
  number_of_desks: string;
  number_of_venues: string;
  number_of_cities: string;
  customization_required: string;
  description: string;
  name: string;
  space: PropertyDetails;
  budget: string;
  expected_move_in_date: string;
  expected_lockin_period: string;
  expected_agreement_period: string;
  lead_owner: UserI;
  lead_type: string;
  lead_stage: string;
  lead_source: string;
  last_contacted: string;
  lead_sales_person: UserI[];
  company_name: LeadContactI;
  contact_person: LeadContactPersonI[];
  contactpersons: LeadContactPersonI[];
  lead_attachments: string[];
  lead_comment: [];
  created_at: string;
  updated_at: string;
}

export interface LeadFormI {
  id: string;
  _id: string;
  number_of_desks: string;
  number_of_venues: string;
  number_of_cities: string;
  customization_required: string;
  description: string;
  name: string;
  space: PropertyDetails;
  budget: string;
  expected_move_in_date: string;
  expected_lockin_period: string;
  expected_agreement_period: string;
  lead_owner: DropdownOptionI;
  lead_type: DropdownOptionI;
  lead_stage: DropdownOptionI;
  lead_source: string;
  last_contacted: string;
  lead_sales_person: UserI[];
  company_name?: DropdownOptionI;
  contact_person: LeadContactPersonI[];
  contactpersons: LeadContactPersonI[];
  lead_attachments: string[];
  lead_comment: [];
  created_at: string;
  updated_at: string;
}

export interface LeadStageI {
  id: string;
  stage_name: string;
  stage_position: number;
}

export interface LeadContactI {
  _id: string;
  id?: string;
  name: string;
  website?: string;
  industry?: string;
  number_of_employees?: string;
  head_quarter?: string;
  contactpersons?: LeadContactPersonI[];
  contact_person?: LeadContactPersonI[];
  created_by?: string;
}

export interface SalesLeadPipelineI extends SalesLeadI {
  lead: SalesLeadI[];
}

export interface DistributePolicyFormI {
  policy_name: string;
  fund_per_person: string;
  recurring: {
    value: string;
    label: string;
  };
  customer_users?: string[];
  group?: string[];
  complimentary_id?: string;
  complimentary_name?: string;
  complimentary_credit?: string | number;
  id?: string;
  _id?: string;
}

export interface DistributeAllocationPolicyI {
  _id?: string;
  id?: string;
  policy_name: string;
  fund_per_person: string;
  recurring: string;
  customer_users?: string[];
  group?: string[];
  complimentary_id?: string;
  complimentary_name?: string;
  complimentary_credit?: string | number;
  customers?: CustomerUserI[];
  groups?: CustomerGroupI[];
  status?: string;
}

export interface LeadActivityI {
  id: string;
  created_by: UserI;
  company_name: string;
  info_message: string;
  attachmentUrl: string[];
  created_at: string;
}

export interface LeadQfilterI {
  companyName: string;
  leadOwner: string | object;
  leadStatus: string;
  leadSource: string;
  totalNoOfDesks: { start: string; end: string };
  budget: { start: string; end: string };
  expectedMoveInDate: { start: string; end: string };
}

export interface PermissionsI {
  id?: string;
  is_add: boolean;
  is_edit: boolean;
  is_view: boolean;
  is_delete: boolean;
  module: {
    _id: string;
    module_name: string;
  };
}

export interface RequestedCreditsI {
  id: string;
  credit_quantity: string | number;
  customer_user: CustomerUserI;
  customerUserWalletBalance: string | number;
  request_description: string;
  created_at: string;
  updated_at: string;
  updated_by: CustomerUserI;
  request_status: string;
}

export interface UpdateRequestCreditsI {
  id: string;
  request_status: string;
  allocated_credit_quantity: string | number;
  request_description?: string;
  rejection_comment?: string;
  rejection_reason?: string;
}

export interface BroadcastI {
  id?: string;
  _id?: string;
  broadcast_subject: string;
  created_at: string;
  totalUsersCount: string;
  created_user: UserI;
  broadcast_message: string;
}

export interface UsersDataI {
  spaces: string[];
  name: string;
  email: string;
  employee_id: string;
  phone: string;
  role_id: string;
  reporting_manager_email: string;
  designation: string;
  flexi_allowed: string;
  is_other_designation: boolean;
  customer_id: string;
  first_time: boolean;
  is_deleted: boolean;
  status: string;
  created_by: string;
  updated_by: UpdatedByI;
  created_at: string;
  updated_at: string;
  last_sign_in: string;
  role: RoleI; // Add the 'role' property
  customer: CustomerI[];
  _id: string;
  id: string;
  display_picture: string;
  roles: string[];
  allocationPolicy: string[];
  permissions?: PermissionsI[];
}
export interface VendorCustomerI {
  isEditable: JSX.Element;
  id?: string;
  logo?: string;
  name: string;
  owner_name: string;
  owner_email: string;
  phone: string;
  address: AddressI;
  gst?: string;
  pan: string;
  spaces: SpaceI[];
  designation?: string;
  other_designation?: string;
  number_of_employees?: string;
}

export interface VendorCustomerFormI {
  id?: string;
  logo?: string;
  name: string;
  owner_name: string;
  owner_email: string;
  phone: string;
  address: AddressI;
  gst?: string;
  pan: string;
  reporting_managers?: UserI[];
  spaces?: {
    id: string;
    reporting_managers: SpocI[];
  }[];
  website?: string;
  industry?: string;
  no_of_employees?: { label: string; value: string };
  designation?: { label: string; value: string };
  other_designation?: string;
  email?: string;
  isEditable?: boolean;
  customerOwnwerId?: string;
}
export interface VendorCustomerWithoutContractI {
  _id: string;
  customer: CustomerI;
  created_at: string;
  customer_id: string;
  customer_created_by?: UserI;
  spaces: SpaceI[];
  status: string;
  updated_at: string;
  vendor_created_by?: UserI;
  reporting_managers: UserI[];
  customer_updated_by?: UserI;
  vendor_updated_by?: string;
  email?: string;
  isEditable?: boolean;
}

export interface LeadHistoryI {
  _id: string;
  created_at: string;
  updated_at: string;
  company: LeadContactI;
  contact_person: LeadContactPersonI[];
  lead: SalesLeadI;
  space: SpaceI;
  lead_owner: UserI;
  lead_stage: LeadStageI;
}

export interface UserCheckinLogsI {
  space: SpaceI;
  checked: string;
  time: string;
}
