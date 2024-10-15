//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! <https://github.com/kinobi-so/kinobi>
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct ReallocWhitelist {
    pub whitelist: solana_program::pubkey::Pubkey,
    /// there can only be 1 whitelist authority (due to seeds),
    /// and we're checking that 1)the correct cosigner is present on it, and 2)is a signer
    pub whitelist_authority: solana_program::pubkey::Pubkey,

    pub cosigner: solana_program::pubkey::Pubkey,

    pub system_program: solana_program::pubkey::Pubkey,
}

impl ReallocWhitelist {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(&[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(4 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.whitelist,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.whitelist_authority,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.cosigner,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let data = ReallocWhitelistInstructionData::new().try_to_vec().unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::TENSOR_WHITELIST_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct ReallocWhitelistInstructionData {
    discriminator: [u8; 8],
}

impl ReallocWhitelistInstructionData {
    pub fn new() -> Self {
        Self {
            discriminator: [173, 147, 168, 152, 181, 46, 55, 60],
        }
    }
}

impl Default for ReallocWhitelistInstructionData {
    fn default() -> Self {
        Self::new()
    }
}

/// Instruction builder for `ReallocWhitelist`.
///
/// ### Accounts:
///
///   0. `[writable]` whitelist
///   1. `[]` whitelist_authority
///   2. `[writable, signer]` cosigner
///   3. `[optional]` system_program (default to `11111111111111111111111111111111`)
#[derive(Clone, Debug, Default)]
pub struct ReallocWhitelistBuilder {
    whitelist: Option<solana_program::pubkey::Pubkey>,
    whitelist_authority: Option<solana_program::pubkey::Pubkey>,
    cosigner: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl ReallocWhitelistBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn whitelist(&mut self, whitelist: solana_program::pubkey::Pubkey) -> &mut Self {
        self.whitelist = Some(whitelist);
        self
    }
    /// there can only be 1 whitelist authority (due to seeds),
    /// and we're checking that 1)the correct cosigner is present on it, and 2)is a signer
    #[inline(always)]
    pub fn whitelist_authority(
        &mut self,
        whitelist_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.whitelist_authority = Some(whitelist_authority);
        self
    }
    #[inline(always)]
    pub fn cosigner(&mut self, cosigner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.cosigner = Some(cosigner);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
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
        let accounts = ReallocWhitelist {
            whitelist: self.whitelist.expect("whitelist is not set"),
            whitelist_authority: self
                .whitelist_authority
                .expect("whitelist_authority is not set"),
            cosigner: self.cosigner.expect("cosigner is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
        };

        accounts.instruction_with_remaining_accounts(&self.__remaining_accounts)
    }
}

/// `realloc_whitelist` CPI accounts.
pub struct ReallocWhitelistCpiAccounts<'a, 'b> {
    pub whitelist: &'b solana_program::account_info::AccountInfo<'a>,
    /// there can only be 1 whitelist authority (due to seeds),
    /// and we're checking that 1)the correct cosigner is present on it, and 2)is a signer
    pub whitelist_authority: &'b solana_program::account_info::AccountInfo<'a>,

    pub cosigner: &'b solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `realloc_whitelist` CPI instruction.
pub struct ReallocWhitelistCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,

    pub whitelist: &'b solana_program::account_info::AccountInfo<'a>,
    /// there can only be 1 whitelist authority (due to seeds),
    /// and we're checking that 1)the correct cosigner is present on it, and 2)is a signer
    pub whitelist_authority: &'b solana_program::account_info::AccountInfo<'a>,

    pub cosigner: &'b solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
}

impl<'a, 'b> ReallocWhitelistCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: ReallocWhitelistCpiAccounts<'a, 'b>,
    ) -> Self {
        Self {
            __program: program,
            whitelist: accounts.whitelist,
            whitelist_authority: accounts.whitelist_authority,
            cosigner: accounts.cosigner,
            system_program: accounts.system_program,
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
        let mut accounts = Vec::with_capacity(4 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.whitelist.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.whitelist_authority.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.cosigner.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let data = ReallocWhitelistInstructionData::new().try_to_vec().unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::TENSOR_WHITELIST_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(4 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.whitelist.clone());
        account_infos.push(self.whitelist_authority.clone());
        account_infos.push(self.cosigner.clone());
        account_infos.push(self.system_program.clone());
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

/// Instruction builder for `ReallocWhitelist` via CPI.
///
/// ### Accounts:
///
///   0. `[writable]` whitelist
///   1. `[]` whitelist_authority
///   2. `[writable, signer]` cosigner
///   3. `[]` system_program
#[derive(Clone, Debug)]
pub struct ReallocWhitelistCpiBuilder<'a, 'b> {
    instruction: Box<ReallocWhitelistCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> ReallocWhitelistCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(ReallocWhitelistCpiBuilderInstruction {
            __program: program,
            whitelist: None,
            whitelist_authority: None,
            cosigner: None,
            system_program: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn whitelist(
        &mut self,
        whitelist: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.whitelist = Some(whitelist);
        self
    }
    /// there can only be 1 whitelist authority (due to seeds),
    /// and we're checking that 1)the correct cosigner is present on it, and 2)is a signer
    #[inline(always)]
    pub fn whitelist_authority(
        &mut self,
        whitelist_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.whitelist_authority = Some(whitelist_authority);
        self
    }
    #[inline(always)]
    pub fn cosigner(
        &mut self,
        cosigner: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.cosigner = Some(cosigner);
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
        let instruction = ReallocWhitelistCpi {
            __program: self.instruction.__program,

            whitelist: self.instruction.whitelist.expect("whitelist is not set"),

            whitelist_authority: self
                .instruction
                .whitelist_authority
                .expect("whitelist_authority is not set"),

            cosigner: self.instruction.cosigner.expect("cosigner is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

#[derive(Clone, Debug)]
struct ReallocWhitelistCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    whitelist: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    whitelist_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    cosigner: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
