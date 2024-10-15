//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! <https://github.com/kinobi-so/kinobi>
//!

use crate::generated::types::Condition;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use solana_program::pubkey::Pubkey;

/// Accounts.
pub struct CreateWhitelistV2 {
    /// The rent payer.
    pub payer: solana_program::pubkey::Pubkey,
    /// The authority that will be allowed to update the whitelist.
    pub update_authority: solana_program::pubkey::Pubkey,
    /// Namespace keypair used to derive the whitelist PDA.
    pub namespace: solana_program::pubkey::Pubkey,
    /// The whitelist PDA.
    pub whitelist: solana_program::pubkey::Pubkey,
    /// The Solana system program.
    pub system_program: solana_program::pubkey::Pubkey,
}

impl CreateWhitelistV2 {
    pub fn instruction(
        &self,
        args: CreateWhitelistV2InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: CreateWhitelistV2InstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(5 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.update_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.namespace,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.whitelist,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = CreateWhitelistV2InstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::TENSOR_WHITELIST_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct CreateWhitelistV2InstructionData {
    discriminator: [u8; 8],
}

impl CreateWhitelistV2InstructionData {
    pub fn new() -> Self {
        Self {
            discriminator: [31, 207, 213, 77, 105, 13, 127, 98],
        }
    }
}

impl Default for CreateWhitelistV2InstructionData {
    fn default() -> Self {
        Self::new()
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct CreateWhitelistV2InstructionArgs {
    pub uuid: [u8; 32],
    pub freeze_authority: Option<Pubkey>,
    pub conditions: Vec<Condition>,
}

/// Instruction builder for `CreateWhitelistV2`.
///
/// ### Accounts:
///
///   0. `[writable, signer]` payer
///   1. `[signer]` update_authority
///   2. `[signer]` namespace
///   3. `[writable]` whitelist
///   4. `[optional]` system_program (default to `11111111111111111111111111111111`)
#[derive(Clone, Debug, Default)]
pub struct CreateWhitelistV2Builder {
    payer: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    namespace: Option<solana_program::pubkey::Pubkey>,
    whitelist: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    uuid: Option<[u8; 32]>,
    freeze_authority: Option<Pubkey>,
    conditions: Option<Vec<Condition>>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl CreateWhitelistV2Builder {
    pub fn new() -> Self {
        Self::default()
    }
    /// The rent payer.
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// The authority that will be allowed to update the whitelist.
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    /// Namespace keypair used to derive the whitelist PDA.
    #[inline(always)]
    pub fn namespace(&mut self, namespace: solana_program::pubkey::Pubkey) -> &mut Self {
        self.namespace = Some(namespace);
        self
    }
    /// The whitelist PDA.
    #[inline(always)]
    pub fn whitelist(&mut self, whitelist: solana_program::pubkey::Pubkey) -> &mut Self {
        self.whitelist = Some(whitelist);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    /// The Solana system program.
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    #[inline(always)]
    pub fn uuid(&mut self, uuid: [u8; 32]) -> &mut Self {
        self.uuid = Some(uuid);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn freeze_authority(&mut self, freeze_authority: Pubkey) -> &mut Self {
        self.freeze_authority = Some(freeze_authority);
        self
    }
    #[inline(always)]
    pub fn conditions(&mut self, conditions: Vec<Condition>) -> &mut Self {
        self.conditions = Some(conditions);
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
        let accounts = CreateWhitelistV2 {
            payer: self.payer.expect("payer is not set"),
            update_authority: self.update_authority.expect("update_authority is not set"),
            namespace: self.namespace.expect("namespace is not set"),
            whitelist: self.whitelist.expect("whitelist is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
        };
        let args = CreateWhitelistV2InstructionArgs {
            uuid: self.uuid.clone().expect("uuid is not set"),
            freeze_authority: self.freeze_authority.clone(),
            conditions: self.conditions.clone().expect("conditions is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `create_whitelist_v2` CPI accounts.
pub struct CreateWhitelistV2CpiAccounts<'a, 'b> {
    /// The rent payer.
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// The authority that will be allowed to update the whitelist.
    pub update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Namespace keypair used to derive the whitelist PDA.
    pub namespace: &'b solana_program::account_info::AccountInfo<'a>,
    /// The whitelist PDA.
    pub whitelist: &'b solana_program::account_info::AccountInfo<'a>,
    /// The Solana system program.
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `create_whitelist_v2` CPI instruction.
pub struct CreateWhitelistV2Cpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// The rent payer.
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// The authority that will be allowed to update the whitelist.
    pub update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Namespace keypair used to derive the whitelist PDA.
    pub namespace: &'b solana_program::account_info::AccountInfo<'a>,
    /// The whitelist PDA.
    pub whitelist: &'b solana_program::account_info::AccountInfo<'a>,
    /// The Solana system program.
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: CreateWhitelistV2InstructionArgs,
}

impl<'a, 'b> CreateWhitelistV2Cpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: CreateWhitelistV2CpiAccounts<'a, 'b>,
        args: CreateWhitelistV2InstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            payer: accounts.payer,
            update_authority: accounts.update_authority,
            namespace: accounts.namespace,
            whitelist: accounts.whitelist,
            system_program: accounts.system_program,
            __args: args,
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
        let mut accounts = Vec::with_capacity(5 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.update_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.namespace.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.whitelist.key,
            false,
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
        let mut data = CreateWhitelistV2InstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::TENSOR_WHITELIST_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(5 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.update_authority.clone());
        account_infos.push(self.namespace.clone());
        account_infos.push(self.whitelist.clone());
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

/// Instruction builder for `CreateWhitelistV2` via CPI.
///
/// ### Accounts:
///
///   0. `[writable, signer]` payer
///   1. `[signer]` update_authority
///   2. `[signer]` namespace
///   3. `[writable]` whitelist
///   4. `[]` system_program
#[derive(Clone, Debug)]
pub struct CreateWhitelistV2CpiBuilder<'a, 'b> {
    instruction: Box<CreateWhitelistV2CpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> CreateWhitelistV2CpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CreateWhitelistV2CpiBuilderInstruction {
            __program: program,
            payer: None,
            update_authority: None,
            namespace: None,
            whitelist: None,
            system_program: None,
            uuid: None,
            freeze_authority: None,
            conditions: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// The rent payer.
    #[inline(always)]
    pub fn payer(&mut self, payer: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// The authority that will be allowed to update the whitelist.
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    /// Namespace keypair used to derive the whitelist PDA.
    #[inline(always)]
    pub fn namespace(
        &mut self,
        namespace: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.namespace = Some(namespace);
        self
    }
    /// The whitelist PDA.
    #[inline(always)]
    pub fn whitelist(
        &mut self,
        whitelist: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.whitelist = Some(whitelist);
        self
    }
    /// The Solana system program.
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    #[inline(always)]
    pub fn uuid(&mut self, uuid: [u8; 32]) -> &mut Self {
        self.instruction.uuid = Some(uuid);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn freeze_authority(&mut self, freeze_authority: Pubkey) -> &mut Self {
        self.instruction.freeze_authority = Some(freeze_authority);
        self
    }
    #[inline(always)]
    pub fn conditions(&mut self, conditions: Vec<Condition>) -> &mut Self {
        self.instruction.conditions = Some(conditions);
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
        let args = CreateWhitelistV2InstructionArgs {
            uuid: self.instruction.uuid.clone().expect("uuid is not set"),
            freeze_authority: self.instruction.freeze_authority.clone(),
            conditions: self
                .instruction
                .conditions
                .clone()
                .expect("conditions is not set"),
        };
        let instruction = CreateWhitelistV2Cpi {
            __program: self.instruction.__program,

            payer: self.instruction.payer.expect("payer is not set"),

            update_authority: self
                .instruction
                .update_authority
                .expect("update_authority is not set"),

            namespace: self.instruction.namespace.expect("namespace is not set"),

            whitelist: self.instruction.whitelist.expect("whitelist is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

#[derive(Clone, Debug)]
struct CreateWhitelistV2CpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    payer: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    namespace: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    whitelist: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    uuid: Option<[u8; 32]>,
    freeze_authority: Option<Pubkey>,
    conditions: Option<Vec<Condition>>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
