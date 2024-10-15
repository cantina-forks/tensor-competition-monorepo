//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! <https://github.com/kinobi-so/kinobi>
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct CloseExpiredListingT22 {
    pub owner: solana_program::pubkey::Pubkey,

    pub owner_ta: solana_program::pubkey::Pubkey,

    pub list_state: solana_program::pubkey::Pubkey,

    pub list_ta: solana_program::pubkey::Pubkey,

    pub mint: solana_program::pubkey::Pubkey,

    pub rent_destination: solana_program::pubkey::Pubkey,

    pub payer: solana_program::pubkey::Pubkey,

    pub token_program: solana_program::pubkey::Pubkey,

    pub associated_token_program: solana_program::pubkey::Pubkey,

    pub system_program: solana_program::pubkey::Pubkey,

    pub marketplace_program: solana_program::pubkey::Pubkey,
}

impl CloseExpiredListingT22 {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(&[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(11 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.owner, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.owner_ta,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.list_state,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.list_ta,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.rent_destination,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.associated_token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.marketplace_program,
            false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let data = CloseExpiredListingT22InstructionData::new()
            .try_to_vec()
            .unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::TENSOR_MARKETPLACE_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct CloseExpiredListingT22InstructionData {
    discriminator: [u8; 8],
}

impl CloseExpiredListingT22InstructionData {
    pub fn new() -> Self {
        Self {
            discriminator: [69, 2, 190, 122, 144, 119, 122, 220],
        }
    }
}

impl Default for CloseExpiredListingT22InstructionData {
    fn default() -> Self {
        Self::new()
    }
}

/// Instruction builder for `CloseExpiredListingT22`.
///
/// ### Accounts:
///
///   0. `[]` owner
///   1. `[writable]` owner_ta
///   2. `[writable]` list_state
///   3. `[writable]` list_ta
///   4. `[]` mint
///   5. `[writable]` rent_destination
///   6. `[writable, signer]` payer
///   7. `[optional]` token_program (default to `TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)
///   8. `[optional]` associated_token_program (default to `ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL`)
///   9. `[optional]` system_program (default to `11111111111111111111111111111111`)
///   10. `[optional]` marketplace_program (default to `TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp`)
#[derive(Clone, Debug, Default)]
pub struct CloseExpiredListingT22Builder {
    owner: Option<solana_program::pubkey::Pubkey>,
    owner_ta: Option<solana_program::pubkey::Pubkey>,
    list_state: Option<solana_program::pubkey::Pubkey>,
    list_ta: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    rent_destination: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    associated_token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    marketplace_program: Option<solana_program::pubkey::Pubkey>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl CloseExpiredListingT22Builder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn owner(&mut self, owner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.owner = Some(owner);
        self
    }
    #[inline(always)]
    pub fn owner_ta(&mut self, owner_ta: solana_program::pubkey::Pubkey) -> &mut Self {
        self.owner_ta = Some(owner_ta);
        self
    }
    #[inline(always)]
    pub fn list_state(&mut self, list_state: solana_program::pubkey::Pubkey) -> &mut Self {
        self.list_state = Some(list_state);
        self
    }
    #[inline(always)]
    pub fn list_ta(&mut self, list_ta: solana_program::pubkey::Pubkey) -> &mut Self {
        self.list_ta = Some(list_ta);
        self
    }
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    #[inline(always)]
    pub fn rent_destination(
        &mut self,
        rent_destination: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.rent_destination = Some(rent_destination);
        self
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// `[optional account, default to 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb']`
    #[inline(always)]
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
        self
    }
    /// `[optional account, default to 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL']`
    #[inline(always)]
    pub fn associated_token_program(
        &mut self,
        associated_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.associated_token_program = Some(associated_token_program);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// `[optional account, default to 'TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp']`
    #[inline(always)]
    pub fn marketplace_program(
        &mut self,
        marketplace_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.marketplace_program = Some(marketplace_program);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = CloseExpiredListingT22 {
            owner: self.owner.expect("owner is not set"),
            owner_ta: self.owner_ta.expect("owner_ta is not set"),
            list_state: self.list_state.expect("list_state is not set"),
            list_ta: self.list_ta.expect("list_ta is not set"),
            mint: self.mint.expect("mint is not set"),
            rent_destination: self.rent_destination.expect("rent_destination is not set"),
            payer: self.payer.expect("payer is not set"),
            token_program: self.token_program.unwrap_or(solana_program::pubkey!(
                "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
            )),
            associated_token_program: self.associated_token_program.unwrap_or(
                solana_program::pubkey!("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
            ),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            marketplace_program: self.marketplace_program.unwrap_or(solana_program::pubkey!(
                "TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp"
            )),
        };

        accounts.instruction_with_remaining_accounts(&self.__remaining_accounts)
    }
}

/// `close_expired_listing_t22` CPI accounts.
pub struct CloseExpiredListingT22CpiAccounts<'a, 'b> {
    pub owner: &'b solana_program::account_info::AccountInfo<'a>,

    pub owner_ta: &'b solana_program::account_info::AccountInfo<'a>,

    pub list_state: &'b solana_program::account_info::AccountInfo<'a>,

    pub list_ta: &'b solana_program::account_info::AccountInfo<'a>,

    pub mint: &'b solana_program::account_info::AccountInfo<'a>,

    pub rent_destination: &'b solana_program::account_info::AccountInfo<'a>,

    pub payer: &'b solana_program::account_info::AccountInfo<'a>,

    pub token_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub associated_token_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub marketplace_program: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `close_expired_listing_t22` CPI instruction.
pub struct CloseExpiredListingT22Cpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,

    pub owner: &'b solana_program::account_info::AccountInfo<'a>,

    pub owner_ta: &'b solana_program::account_info::AccountInfo<'a>,

    pub list_state: &'b solana_program::account_info::AccountInfo<'a>,

    pub list_ta: &'b solana_program::account_info::AccountInfo<'a>,

    pub mint: &'b solana_program::account_info::AccountInfo<'a>,

    pub rent_destination: &'b solana_program::account_info::AccountInfo<'a>,

    pub payer: &'b solana_program::account_info::AccountInfo<'a>,

    pub token_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub associated_token_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub marketplace_program: &'b solana_program::account_info::AccountInfo<'a>,
}

impl<'a, 'b> CloseExpiredListingT22Cpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: CloseExpiredListingT22CpiAccounts<'a, 'b>,
    ) -> Self {
        Self {
            __program: program,
            owner: accounts.owner,
            owner_ta: accounts.owner_ta,
            list_state: accounts.list_state,
            list_ta: accounts.list_ta,
            mint: accounts.mint,
            rent_destination: accounts.rent_destination,
            payer: accounts.payer,
            token_program: accounts.token_program,
            associated_token_program: accounts.associated_token_program,
            system_program: accounts.system_program,
            marketplace_program: accounts.marketplace_program,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(11 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.owner.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.owner_ta.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.list_state.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.list_ta.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.rent_destination.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.associated_token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.marketplace_program.key,
            false,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let data = CloseExpiredListingT22InstructionData::new()
            .try_to_vec()
            .unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::TENSOR_MARKETPLACE_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(11 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.owner.clone());
        account_infos.push(self.owner_ta.clone());
        account_infos.push(self.list_state.clone());
        account_infos.push(self.list_ta.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.rent_destination.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.token_program.clone());
        account_infos.push(self.associated_token_program.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.marketplace_program.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `CloseExpiredListingT22` via CPI.
///
/// ### Accounts:
///
///   0. `[]` owner
///   1. `[writable]` owner_ta
///   2. `[writable]` list_state
///   3. `[writable]` list_ta
///   4. `[]` mint
///   5. `[writable]` rent_destination
///   6. `[writable, signer]` payer
///   7. `[]` token_program
///   8. `[]` associated_token_program
///   9. `[]` system_program
///   10. `[]` marketplace_program
#[derive(Clone, Debug)]
pub struct CloseExpiredListingT22CpiBuilder<'a, 'b> {
    instruction: Box<CloseExpiredListingT22CpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> CloseExpiredListingT22CpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CloseExpiredListingT22CpiBuilderInstruction {
            __program: program,
            owner: None,
            owner_ta: None,
            list_state: None,
            list_ta: None,
            mint: None,
            rent_destination: None,
            payer: None,
            token_program: None,
            associated_token_program: None,
            system_program: None,
            marketplace_program: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn owner(&mut self, owner: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.owner = Some(owner);
        self
    }
    #[inline(always)]
    pub fn owner_ta(
        &mut self,
        owner_ta: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.owner_ta = Some(owner_ta);
        self
    }
    #[inline(always)]
    pub fn list_state(
        &mut self,
        list_state: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.list_state = Some(list_state);
        self
    }
    #[inline(always)]
    pub fn list_ta(
        &mut self,
        list_ta: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.list_ta = Some(list_ta);
        self
    }
    #[inline(always)]
    pub fn mint(&mut self, mint: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    #[inline(always)]
    pub fn rent_destination(
        &mut self,
        rent_destination: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.rent_destination = Some(rent_destination);
        self
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    #[inline(always)]
    pub fn token_program(
        &mut self,
        token_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_program = Some(token_program);
        self
    }
    #[inline(always)]
    pub fn associated_token_program(
        &mut self,
        associated_token_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.associated_token_program = Some(associated_token_program);
        self
    }
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    #[inline(always)]
    pub fn marketplace_program(
        &mut self,
        marketplace_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.marketplace_program = Some(marketplace_program);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let instruction = CloseExpiredListingT22Cpi {
            __program: self.instruction.__program,

            owner: self.instruction.owner.expect("owner is not set"),

            owner_ta: self.instruction.owner_ta.expect("owner_ta is not set"),

            list_state: self.instruction.list_state.expect("list_state is not set"),

            list_ta: self.instruction.list_ta.expect("list_ta is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            rent_destination: self
                .instruction
                .rent_destination
                .expect("rent_destination is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            token_program: self
                .instruction
                .token_program
                .expect("token_program is not set"),

            associated_token_program: self
                .instruction
                .associated_token_program
                .expect("associated_token_program is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            marketplace_program: self
                .instruction
                .marketplace_program
                .expect("marketplace_program is not set"),
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

#[derive(Clone, Debug)]
struct CloseExpiredListingT22CpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    owner: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    owner_ta: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    list_state: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    list_ta: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    rent_destination: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    associated_token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    marketplace_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}